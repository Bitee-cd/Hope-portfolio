export interface Project {
  title: string;
  link: string;
  image: string;
}

export interface OverViewData {
  title: string;
  text?: string;
  list?: string[];
  icons?: IconLink[];
  color?: string;
  className?: string;
}
interface IconLink {
  link: string;
}

export interface OverViewStyle {
  color: string;
  className: string;
  icon_className: string;
  bullet_className: string;
  text_color: string;
}
