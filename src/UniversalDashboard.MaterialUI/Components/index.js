import "./bootstrap"; 
import Chip from "./chips";
import Icon from "./icon";
import Paper from "./paper";
import IconButton from "./icon-button";
import List from "./list";
import Button from "./button";
import UDMuCard from "./card";
import UDCardMedia from "./card-media";
import UDCardToolBar from "./card-toolbar";
import UDCardHeader from "./card-header";
import UDCardBody from "./card-body";
import UDCardExpand from "./card-expand";
import UDCardFooter from "./card-footer";
import Typography from "./typography";
import UDLink from "./link";
import UDAvatar from "./avatar";
import UDCheckBox from "./checkbox";
import UDNavbar from './ud-navbar';
import Root from './root';
// import Pdf from "./pdf"; //this version has a bug render text not correct.

UniversalDashboard.register("mu-chip", Chip);
UniversalDashboard.register("mu-icon", Icon);
UniversalDashboard.register("mu-paper", Paper);
UniversalDashboard.register("mu-icon-button", IconButton);
UniversalDashboard.register("mu-list", List);
UniversalDashboard.register("mu-list-item", List);
UniversalDashboard.register("mu-button", Button);
UniversalDashboard.register("mu-card", UDMuCard);
UniversalDashboard.register("mu-card-media", UDCardMedia);
UniversalDashboard.register("mu-card-toolbar", UDCardToolBar);
UniversalDashboard.register("mu-card-header", UDCardHeader);
UniversalDashboard.register("mu-card-body", UDCardBody);
UniversalDashboard.register("mu-card-expand", UDCardExpand);
UniversalDashboard.register("mu-card-footer", UDCardFooter);
UniversalDashboard.register("mu-typography", Typography);
UniversalDashboard.register("mu-link", UDLink);
UniversalDashboard.register("mu-avatar", UDAvatar);
UniversalDashboard.register("mu-checkbox", UDCheckBox);
UniversalDashboard.register("ud-navbar", UDNavbar);
UniversalDashboard.register("root", Root);
// UniversalDashboard.register("ud-pdf", Pdf);
