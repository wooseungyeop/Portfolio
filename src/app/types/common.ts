import { RefObject } from 'react';
import type { IconType } from 'react-icons';

export interface NavItem {
  label: string;
  href: string;
}

export const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];


export interface MenuToggleProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

export interface MobileNavProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  pathname: string;
  menuRef: RefObject<HTMLDivElement | null>;
}

export interface TechIconData {
  icon: IconType;
  color: string;
}

export type Project = {
  title: string;
  descriptionLines: string[];
  images: string[];
  tech: string[];
  link: string;
  duration?: string;
  role?: string;
  period?: string;
  roles?: string[];
  members?: number;
};
