import { createGlobalStyle } from "styled-components";
import { WHITE, SELAGO } from "./constants/colors";
import { mq } from "./constants/theme";

const globalStyles = createGlobalStyle`
* {
  box-sizing: border-box;
}

::-webkit-scrollbar{
  width: 10px;
  background-color: ${WHITE};
}

::-webkit-scrollbar-thumb{
  background-color: grey;
}

html {
  font-size: 62.5%;

  @media screen and (min-width: ${mq.desktop.extra.minWidth}) {
    font-size: 150%;
  }
}

body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: ${WHITE};
  font-family: "Poppins", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

span {
    font-family: "Work Sans", sans-serif;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}

a {
  text-decoration: none;
  color: inherit;
}

.text-center {
  text-align: center !important;
}

.bkg-white {
  background-color: ${WHITE} !important;
}

.am-drawer, .app-drawer, .am-drawer-right {
  min-height: 100% !important;
}

.app-drawer .am-drawer-sidebar {
  background-color: $white;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  ::-webkit-scrollbar {
    display: none;
  }
}

.app-drawer .am-drawer-sidebar .am-list {
  width: 20rem;
  padding: 0;
}

.app-drawer .am-drawer-content {
	position: relative;
	min-height: 100vh;
	padding-bottom: 6rem; // footer height
	overflow: hidden;
  @media screen and (max-width: ${mq.tablet.wide.minWidth}) {
	  padding-bottom: 8rem; // max mobile footer height based on content
  }
}

.am-drawer-sidebar {
  position: fixed;
}

.text-light {
  font-weight: 500;
}

.nav-item {
  padding: .5rem 1rem;

  > a,
  > a.nav-link {
    color: #000 !important;
    display: inline;
    padding: 0;
  }

  .active {
    color: $royal-blue;
  }
}

.btn-light {
  border: .1rem solid #ddd;
}

.ant-select-dropdown {
  font-family: Work Sans;
  font-size: 1.1rem;

  .ant-select-item-option-content {
    font-weight: normal;
  }

  .ant-select-item-option-selected:not(.ant-select-item-option-disabled) {
    background-color: ${SELAGO};
  }
}
.ReactVirtualized__Grid, .ReactVirtualized__List, .ReactVirtualized__Grid__innerScrollContainer {
    overflow: visible !important;
}
/* transform: translateZ(1px) messes up z-index precendence on iPhones */
.feed-filter-modal-wrap {
  transform: none;
}
#launcher {
  bottom: 5rem !important;
  z-index: 1 !important;
  @media screen and (max-width: ${mq.tablet.wide.minWidth}) {
    bottom: 1.85rem !important;
    transform: scale(0.95) !important;
  }
}

#launcher{
  @media screen and (max-width: ${mq.phone.wide.maxWidth}){
    left: 0.5rem !important;
  }
}
`;

export default globalStyles;
