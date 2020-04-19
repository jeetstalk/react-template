/*eslint-disable*/
import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import {List,   Collapse, Typography, Container } from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Icon from "@material-ui/core/Icon";
// core components
import AdminNavbarLinks from "components/Navbars/AdminNavbarLinks.js";
import RTLNavbarLinks from "components/Navbars/RTLNavbarLinks.js";

import styles from "assets/jss/material-dashboard-react/components/sidebarStyle.js";

import DashboardIcon from '@material-ui/icons/Dashboard';
import PersonIcon from '@material-ui/icons/Person';
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import LocationOn from "@material-ui/icons/LocationOn";
import FileCopyIcon from '@material-ui/icons/FileCopy';
import ListAltIcon from '@material-ui/icons/ListAlt';



import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
// import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import TocIcon from '@material-ui/icons/Toc';



const useStyles = makeStyles(styles);



export default function Sidebar(props) {
  const classes = useStyles();

  const [expanded1, setExpanded1] = React.useState(false);
  const [expanded2, setExpanded2] = React.useState(false);
  const [expanded3, setExpanded3] = React.useState(false);
  const [expanded4, setExpanded4] = React.useState(false);
  const [expanded5, setExpanded5] = React.useState(false);

  const [expanded6, setExpanded6] = React.useState(false);
  const [expanded6_1, setExpanded6_1] = React.useState(false);
  const [expanded6_2, setExpanded6_2] = React.useState(false);


  const handleChange1 = (panel) => (event, isExpanded) => {
    setExpanded1(isExpanded ? panel : false);
  };

  const handleChange2 = (panel) => (event, isExpanded) => {
    setExpanded2(isExpanded ? panel : false);
  };

  const handleChange3 = (panel) => (event, isExpanded) => {
    setExpanded3(isExpanded ? panel : false);
  };

  const handleChange4 = (panel) => (event, isExpanded) => {
    setExpanded4(isExpanded ? panel : false);
  };

  const handleChange5 = (panel) => (event, isExpanded) => {
    setExpanded5(isExpanded ? panel : false);
  };

  const handleChange6 = (panel) => (event, isExpanded) => {
    setExpanded6(isExpanded ? panel : false);
  };
  const handleChange6_1 = (panel) => (event, isExpanded) => {
    setExpanded6_1(isExpanded ? panel : false);
  };

  const handleChange6_2 = (panel) => (event, isExpanded) => {
    setExpanded6_2(isExpanded ? panel : false);
  };




  // verifies if routeName is the one active (in browser input)
  function activeRoute(routeName) {
    return window.location.href.indexOf(routeName) > -1 ? true : false;
    
  }

  const { color, logo, image, logoText, routes, routes1, routes2, routes3, routes4 } = props;


  var Dashboard = (
    <List className={classes.list}>
      {routes.map((prop, key) => {
        var activePro = " ";
        var listItemClasses;
        if (prop.path === "/upgrade-to-pro") {
          activePro = classes.activePro + " ";
          listItemClasses = classNames({
            [" " + classes[color]]: true
          });
        } else {
          listItemClasses = classNames({
            [" " + classes[color]]: activeRoute(prop.layout + prop.path)
          });
        }
        const whiteFontClasses = classNames({
          [" " + classes.whiteFont]: activeRoute(prop.layout + prop.path)
        });


        return (
          <NavLink
            to={prop.layout + prop.path}
            className={activePro + classes.item}
            activeClassName="active"
            key={key}
          >
            <ListItem button className={classes.itemLink + listItemClasses}>
              {typeof prop.icon === "string" ? (
                <Icon
                  className={classNames(classes.itemIcon, whiteFontClasses, {
                    [classes.itemIconRTL]: props.rtlActive
                  })}
                >
                  {prop.icon}
                </Icon>
              ) : (
                <prop.icon
                  className={classNames(classes.itemIcon, whiteFontClasses, {
                    [classes.itemIconRTL]: props.rtlActive
                  })}
                />
              )}
              <ListItemText
                primary={props.rtlActive ? prop.rtlName : prop.name}
                className={classNames(classes.itemText, whiteFontClasses, {
                  [classes.itemTextRTL]: props.rtlActive
                })}
                disableTypography={true}
              />
            </ListItem>
          </NavLink>
        );  
      })}
    </List>
  );



  var Profile = (
    <List className={classes.list}>
      {routes1.map((prop, key) => {

        var activePro = " ";
        var listItemClasses;
        if (prop.path === "/upgrade-to-pro") {
          activePro = classes.activePro + " ";
          listItemClasses = classNames({
            [" " + classes[color]]: true
          });
        } else {
          listItemClasses = classNames({
            [" " + classes[color]]: activeRoute(prop.layout + prop.path)
          });
        }
        const whiteFontClasses = classNames({
          [" " + classes.whiteFont]: activeRoute(prop.layout + prop.path)
        });


        return (
          <NavLink
            to={prop.layout + prop.path}
            className={activePro + classes.item}
            activeClassName="active"
            key={key}
          >
            <ListItem button className={classes.itemLink + listItemClasses}>
              {typeof prop.icon === "string" ? (
                <Icon
                  className={classNames(classes.itemIcon, whiteFontClasses, {
                    [classes.itemIconRTL]: props.rtlActive
                  })}
                >
                  {prop.icon}
                </Icon>
              ) : (
                <prop.icon
                  className={classNames(classes.itemIcon, whiteFontClasses, {
                    [classes.itemIconRTL]: props.rtlActive
                  })}
                />
              )}
              <ListItemText
                primary={props.rtlActive ? prop.rtlName : prop.name}
                className={classNames(classes.itemText, whiteFontClasses, {
                  [classes.itemTextRTL]: props.rtlActive
                })}
                disableTypography={true}
              />
            </ListItem>
          </NavLink>
        );     
      })}
    </List>
  );


  var Table_Typo = (
    <List className={classes.list}>
      {routes2.map((prop, key) => {
        var activePro = " ";
        var listItemClasses;
        if (prop.path === "/upgrade-to-pro") {
          activePro = classes.activePro + " ";
          listItemClasses = classNames({
            [" " + classes[color]]: true
          });
        } else {
          listItemClasses = classNames({
            [" " + classes[color]]: activeRoute(prop.layout + prop.path)
          });
        }
        const whiteFontClasses = classNames({
          [" " + classes.whiteFont]: activeRoute(prop.layout + prop.path)
        });


        return (
          <NavLink
            to={prop.layout + prop.path}
            className={activePro + classes.item}
            activeClassName="active"
            key={key}
          >
            <ListItem button className={classes.itemLink + listItemClasses}>
              {typeof prop.icon === "string" ? (
                <Icon
                  className={classNames(classes.itemIcon, whiteFontClasses, {
                    [classes.itemIconRTL]: props.rtlActive
                  })}
                >
                  {prop.icon}
                </Icon>
              ) : (
                <prop.icon
                  className={classNames(classes.itemIcon, whiteFontClasses, {
                    [classes.itemIconRTL]: props.rtlActive
                  })}
                />
              )}
              <ListItemText
                primary={props.rtlActive ? prop.rtlName : prop.name}
                className={classNames(classes.itemText, whiteFontClasses, {
                  [classes.itemTextRTL]: props.rtlActive
                })}
                disableTypography={true}
              />
            </ListItem>
          </NavLink>
        );    
      })}
    </List>
  );



  var Icons_Map = (
    <List className={classes.list}>
      {routes3.map((prop, key) => {
     var activePro = " ";
        var listItemClasses;
        if (prop.path === "/upgrade-to-pro") {
          activePro = classes.activePro + " ";
          listItemClasses = classNames({
            [" " + classes[color]]: true
          });
        } else {
          listItemClasses = classNames({
            [" " + classes[color]]: activeRoute(prop.layout + prop.path)
          });
        }
        const whiteFontClasses = classNames({
          [" " + classes.whiteFont]: activeRoute(prop.layout + prop.path)
        });

        return (
          <NavLink
            to={prop.layout + prop.path}
            className={activePro + classes.item}
            activeClassName="active"
            key={key}
          >
            <ListItem button className={classes.itemLink + listItemClasses}>
              {typeof prop.icon === "string" ? (
                <Icon
                  className={classNames(classes.itemIcon, whiteFontClasses, {
                    [classes.itemIconRTL]: props.rtlActive
                  })}
                >
                  {prop.icon}
                </Icon>
              ) : (
                <prop.icon
                  className={classNames(classes.itemIcon, whiteFontClasses, {
                    [classes.itemIconRTL]: props.rtlActive
                  })}
                />
              )}
              <ListItemText
                primary={props.rtlActive ? prop.rtlName : prop.name}
                className={classNames(classes.itemText, whiteFontClasses, {
                  [classes.itemTextRTL]: props.rtlActive
                })}
                disableTypography={true}
              />
            </ListItem>
          </NavLink>
        );    
      })}
    </List>
  );


  var Other_Noti = (
    <List className={classes.list}>
      {routes4.map((prop, key) => {
        var activePro = " ";
        var listItemClasses;
        if (prop.path === "/upgrade-to-pro") {
          activePro = classes.activePro + " ";
          listItemClasses = classNames({
            [" " + classes[color]]: true
          });
        } else {
          listItemClasses = classNames({
            [" " + classes[color]]: activeRoute(prop.layout + prop.path)
          });
        }
        const whiteFontClasses = classNames({
          [" " + classes.whiteFont]: activeRoute(prop.layout + prop.path)
        });

        return (
          <NavLink
            to={prop.layout + prop.path}
            className={activePro + classes.item}
            activeClassName="active"
            key={key}
          >
            <ListItem button className={classes.itemLink + listItemClasses}>
              {typeof prop.icon === "string" ? (
                <Icon
                  className={classNames(classes.itemIcon, whiteFontClasses, {
                    [classes.itemIconRTL]: props.rtlActive
                  })}
                >
                  {prop.icon}
                </Icon>
              ) : (
                <prop.icon
                  className={classNames(classes.itemIcon, whiteFontClasses, {
                    [classes.itemIconRTL]: props.rtlActive
                  })}
                />
              )}
              <ListItemText
                primary={props.rtlActive ? prop.rtlName : prop.name}
                className={classNames(classes.itemText, whiteFontClasses, {
                  [classes.itemTextRTL]: props.rtlActive
                })}
                disableTypography={true}
              />
            </ListItem>
          </NavLink>
        );  
      })}
    </List>
  );



  var brand = (
    <div className={classes.logo}>
      <a
        href="https://www.creative-tim.com?ref=mdr-sidebar"
        className={classNames(classes.logoLink, {
          [classes.logoLinkRTL]: props.rtlActive
        })}
        target="_blank"
      >
        <div className={classes.logoImage}>
          <img src={logo} alt="logo" className={classes.img} />
        </div>
        {logoText}
      </a>
    </div>
  );
  return (
    

    <div>
      
      <Hidden mdUp implementation="css">
        <Drawer
          variant="temporary"
          anchor={props.rtlActive ? "left" : "right"}
          open={props.open}
          classes={{
            paper: classNames(classes.drawerPaper, {
              [classes.drawerPaperRTL]: props.rtlActive
            })
          }}
          onClose={props.handleDrawerToggle}
          ModalProps={{
            keepMounted: true // Better open performance on mobile.
          }}
        >
          {brand}
          <div className={classes.sidebarWrapper}>
            {props.rtlActive ? <RTLNavbarLinks /> : <AdminNavbarLinks />}

             <ExpansionPanel  className={classes.expansion}
          expanded1={expanded1 === 'panel1'} onChange={handleChange1('panel1')} >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon style={{color:'white'}} />}
          // aria-controls="panel1bh-content"
          id="panel1bh-header"
        
        >
        <DashboardIcon style={{color:'white', marginRight:15}}/>
        <Typography style={{color:'white'}} >Dashboard</Typography>
        </ExpansionPanelSummary>
          {Dashboard}
        </ExpansionPanel>


         <ExpansionPanel  className={classes.expansion}
          expanded2={expanded2 === 'panel1'} onChange={handleChange2('panel1')} >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon style={{color:'white'}} />}
          // aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
        <PersonIcon style={{color:'white', marginRight:15}}/>
        <Typography style={{color:'white'}} >User Profile</Typography>
        </ExpansionPanelSummary>
        {Profile}
        </ExpansionPanel>


         <ExpansionPanel  className={classes.expansion}
          expanded3={expanded3 === 'panel1'} onChange={handleChange3('panel1')} >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon style={{color:'white'}} />}
          // aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
        <LibraryBooks style={{color:'white', marginRight:15}}/>
        <Typography style={{color:'white'}} >Typography</Typography>
        </ExpansionPanelSummary>
        {Table_Typo}
        </ExpansionPanel>



         <ExpansionPanel  className={classes.expansion}
          expanded4={expanded4 === 'panel1'} onChange={handleChange4('panel1')} >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon style={{color:'white'}} />}
          // aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
        <LocationOn style={{color:'white', marginRight:15}}/>
        <Typography style={{color:'white'}} >Map</Typography>
        </ExpansionPanelSummary>
        {Icons_Map}
        </ExpansionPanel>

      
      <ExpansionPanel  className={classes.expansion}
          expanded5={expanded5 === 'panel1'} onChange={handleChange5('panel1')} >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon style={{color:'white'}} />}
          // aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
        <FileCopyIcon style={{color:'white', marginRight:15}}/>
        <Typography style={{color:'white'}} >Other Pages</Typography>
        </ExpansionPanelSummary>
        {Other_Noti}
        </ExpansionPanel>


        <ExpansionPanel  className={classes.expansion}
          expanded6={expanded6 === 'panel1'} onChange={handleChange6('panel1')} >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon style={{color:'white'}} />}
          // aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
        <ListAltIcon style={{color:'white', marginRight:15}}/>
        <Typography style={{color:'white'}} >Demo List</Typography>
        </ExpansionPanelSummary>  


         <ExpansionPanel  className={classes.expansion}
        style={{color:'white', marginLeft:15}}
          expanded6_1={expanded6_1 === 'panel1'} onChange={handleChange6_1('panel1')} >
        <ExpansionPanelSummary
          expandIcon={<ArrowRightIcon style={{color:'white'}} />}
          // aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
        <TocIcon style={{color:'white', marginRight:15}}/>
        <Typography style={{color:'white'}} >Sub Table 1</Typography>
        </ExpansionPanelSummary> 
        </ExpansionPanel>


          <ExpansionPanel  className={classes.expansion}
          style={{color:'white', marginLeft:15}}
          expanded6_2={expanded6_2 === 'panel1'} onChange={handleChange6_2('panel1')} >
        <ExpansionPanelSummary
          expandIcon={<ArrowRightIcon style={{color:'white'}} />}
          // aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
        <TocIcon style={{color:'white', marginRight:15}}/>
        <Typography style={{color:'white'}} >Sub Table 2</Typography>
        </ExpansionPanelSummary>
        </ExpansionPanel>

        </ExpansionPanel>


          </div>
          {image !== undefined ? (
            <div
              className={classes.background}
              style={{ backgroundImage: "url(" + image + ")" }}
            />
          ) : null}
        </Drawer>
      </Hidden>
      



    {/* ///////////////////// Sidebar For Web Start ////////////////////////////////////   */}
      <Hidden smDown implementation="css">
        <Drawer
          anchor={props.rtlActive ? "right" : "left"}
          variant="permanent"
          open
          classes={{
            paper: classNames(classes.drawerPaper, {
              [classes.drawerPaperRTL]: props.rtlActive
            })
          }}
        >
          {brand}



        
         <div className={classes.sidebarWrapper}>
          <ExpansionPanel  className={classes.list1}
          expanded1={expanded1 === 'panel1'} onChange={handleChange1('panel1')} >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon style={{color:'white'}} />}
          // aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
        <DashboardIcon style={{color:'white', marginRight:15}}/>
        <Typography style={{color:'white'}} >Dashboard</Typography>
        </ExpansionPanelSummary>
          {Dashboard}
        </ExpansionPanel>


         <ExpansionPanel  className={classes.list1}
          expanded2={expanded2 === 'panel1'} onChange={handleChange2('panel1')} >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon style={{color:'white'}} />}
          // aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
        <PersonIcon style={{color:'white', marginRight:15}}/>
        <Typography style={{color:'white'}} >User Profile</Typography>
        </ExpansionPanelSummary>
        {Profile}
        </ExpansionPanel>


         <ExpansionPanel  className={classes.list1}
          expanded3={expanded3 === 'panel1'} onChange={handleChange3('panel1')} >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon style={{color:'white'}} />}
          // aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
        <LibraryBooks style={{color:'white', marginRight:15}}/>
        <Typography style={{color:'white'}} >Typography</Typography>
        </ExpansionPanelSummary>
        {Table_Typo}
        </ExpansionPanel>



         <ExpansionPanel   className={classes.list1}
          expanded4={expanded4 === 'panel1'} onChange={handleChange4('panel1')} >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon style={{color:'white'}} />}
          // aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
        <LocationOn style={{color:'white', marginRight:15}}/>
        <Typography style={{color:'white'}} >Map</Typography>
        </ExpansionPanelSummary>
        {Icons_Map}
        </ExpansionPanel>

      
      <ExpansionPanel   className={classes.list1}
          expanded5={expanded5 === 'panel1'} onChange={handleChange5('panel1')} >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon style={{color:'white'}} />}
          // aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
        <FileCopyIcon style={{color:'white', marginRight:15}}/>
        <Typography style={{color:'white'}} >Other Pages</Typography>
        </ExpansionPanelSummary>
        {Other_Noti}
        </ExpansionPanel>


        <ExpansionPanel  className={classes.list1}
          expanded6={expanded6 === 'panel1'} onChange={handleChange6('panel1')} >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon style={{color:'white'}} />}
          // aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
        <ListAltIcon style={{color:'white', marginRight:15}}/>
        <Typography style={{color:'white'}} >Demo List</Typography>
        </ExpansionPanelSummary>  


         <ExpansionPanel  className={classes.list1}
        style={{color:'white', marginLeft:15}}
          expanded6_1={expanded6_1 === 'panel1'} onChange={handleChange6_1('panel1')} >
        <ExpansionPanelSummary
          expandIcon={<ArrowRightIcon style={{color:'white'}} />}
          // aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
        <TocIcon style={{color:'white', marginRight:15}}/>
        <Typography style={{color:'white'}} >Sub Table 1</Typography>
        </ExpansionPanelSummary> 
        </ExpansionPanel>


          <ExpansionPanel className={classes.list1}
          style={{color:'white', marginLeft:15}}
          expanded6_2={expanded6_2 === 'panel1'} onChange={handleChange6_2('panel1')} >
        <ExpansionPanelSummary
          expandIcon={<ArrowRightIcon style={{color:'white'}} />}
          // aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
        <TocIcon style={{color:'white', marginRight:15}}/>
        <Typography style={{color:'white'}} >Sub Table 2</Typography>
        </ExpansionPanelSummary>
        </ExpansionPanel>

        </ExpansionPanel>

     </div>  {/*  ////////// */}

          {image !== undefined ? (
            <div
              className={classes.background}
              style={{ backgroundImage: "url(" + image + ")" }}
            />
          ) : null}
        </Drawer>
      </Hidden>
     
    </div>
  

  );
}

Sidebar.propTypes = {
  rtlActive: PropTypes.bool,
  handleDrawerToggle: PropTypes.func,
  bgColor: PropTypes.oneOf(["purple", "blue", "green", "orange", "red"]),
  logo: PropTypes.string,
  image: PropTypes.string,
  logoText: PropTypes.string,
  routes: PropTypes.arrayOf(PropTypes.object),
  routes1: PropTypes.arrayOf(PropTypes.object),
  routes2: PropTypes.arrayOf(PropTypes.object),
  routes3: PropTypes.arrayOf(PropTypes.object),
  routes4: PropTypes.arrayOf(PropTypes.object),


  open: PropTypes.bool
};
