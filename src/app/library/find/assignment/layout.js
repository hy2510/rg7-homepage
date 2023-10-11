import Link from "next/link";
import { BackLink, Nav, NavItem } from "@/components/common/common-components";

export default function Layout({ children }) {
  return (
    <div className="pd-top-m">
      <BackLink href="/library/explore" largeFont>
        진행중인 학습
      </BackLink>
      <div className="mg-bottom-m"></div>
      <Nav>
        <Link href="/library/find/assignment/to-do">
          <NavItem active={true}>To-Do</NavItem>
        </Link>
        <Link href="/library/find/assignment/try-again">
          <NavItem active={false}>Try Again</NavItem>
        </Link>
      </Nav>
      {children}
    </div>
  );
}
