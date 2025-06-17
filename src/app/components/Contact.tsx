// components/Contact.tsx
"use client";
import { useState, useEffect, useRef } from "react";
import CardContainer from "./contact/CardContainer";

export default function Contact() {
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);
  const [autoFlip, setAutoFlip] = useState(true);
  const [inView, setInView] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (autoFlip && !inView) {
      const timer = setTimeout(() => {
        setInView(true);
        setAutoFlip(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [autoFlip, inView]);

  useEffect(() => {
    if (!autoFlip) {
      const observer = new window.IntersectionObserver(
        ([entry]) => {
          setInView(entry.isIntersecting && entry.intersectionRatio >= 0.8);
        },
        { threshold: [0.8] }
      );
      if (containerRef.current) observer.observe(containerRef.current);
      return () => {
        if (containerRef.current) observer.unobserve(containerRef.current);
      };
    }
  }, [autoFlip]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setDone(false);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    setLoading(false);
    if (res.ok) setDone(true);
    else alert("메일 전송에 실패했습니다.");

    if (e.currentTarget) {
      e.currentTarget.reset();
    }
  };

  return (
    <CardContainer
      inView={inView}
      handleSubmit={handleSubmit}
      done={done}
      loading={loading}
      containerRef={containerRef}
    />
  );
}
