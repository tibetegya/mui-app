import React, { useState } from 'react'
import {IconButton, SvgIcon, Popover, Typography, List, ListItemButton, ListItemText, Divider } from '@mui/material';
import {
  Dashboard,
  Payments,
  ShoppingCart,
  DashboardCustomize,
  SupervisorAccount,
  LocalOffer,
  ShoppingBasket,
} from '@mui/icons-material'
import cln from 'classnames'

/** local imports */
import styles from './sidebar.module.scss'

const CustomIcon = ({ name, ...rest }) => {
  let Path = ''
  switch (name) {
    case 'product':
      Path = <path d="M21.993 7.94998C21.9914 7.87778 21.9817 7.80599 21.964 7.73598C21.957 7.71098 21.943 7.68698 21.934 7.66198C21.913 7.60498 21.894 7.54898 21.864 7.49698C21.848 7.46998 21.826 7.44798 21.807 7.42198C21.775 7.37698 21.744 7.33098 21.705 7.29198C21.682 7.26998 21.652 7.25198 21.627 7.23098C21.588 7.19898 21.552 7.16398 21.507 7.13698C21.503 7.13398 21.498 7.13398 21.493 7.13098L21.485 7.12498L12.506 2.13498C12.3576 2.0527 12.1908 2.00945 12.0211 2.00928C11.8515 2.0091 11.6845 2.05201 11.536 2.13398L2.515 7.12398C2.512 7.12698 2.509 7.13098 2.504 7.13398L2.494 7.13798C2.459 7.15798 2.433 7.18698 2.4 7.21098C2.364 7.23798 2.326 7.26198 2.294 7.29298C2.264 7.32398 2.241 7.35998 2.215 7.39498C2.188 7.42998 2.158 7.46098 2.136 7.49898C2.11 7.54198 2.096 7.59098 2.077 7.63798C2.063 7.67098 2.045 7.70198 2.036 7.73798C2.01873 7.80672 2.00901 7.87713 2.007 7.94798C2.006 7.96498 2 7.97998 2 7.99798V16C2 16.363 2.197 16.698 2.515 16.874L11.493 21.861L11.494 21.862L11.496 21.863L11.516 21.874C11.559 21.898 11.606 21.911 11.651 21.928C11.683 21.941 11.714 21.958 11.748 21.967C11.914 22.0098 12.088 22.0098 12.254 21.967C12.287 21.958 12.318 21.941 12.351 21.928C12.396 21.911 12.443 21.899 12.486 21.874L12.506 21.863L12.508 21.862L12.509 21.861L21.487 16.874C21.803 16.698 22 16.363 22 16V7.99798C22 7.98098 21.994 7.96698 21.993 7.94998V7.94998ZM11.972 11.872L5.058 8.00498L7.82 6.47698L14.654 10.382L11.972 11.872V11.872ZM12.02 4.15298L18.941 7.99998L16.697 9.24698L9.867 5.34398L12.02 4.15298V4.15298ZM13 19.301L13.002 13.622L16 11.944V15L18 14V10.825L20 9.70598V15.411L13 19.301Z" />
      break;
    default:
      return null
  }
  return (
  <SvgIcon { ...rest}>
    {Path}
  </SvgIcon>
  )
}

const ProductIcon = (props) => <CustomIcon name="product" {...props} />

const Sidebar = () => {
  const links = [
    {
      Icon: Dashboard,
      title: 'Dashboard',
      menu: ['Overview', 'Analytics', 'Settings']
    },
    {
      Icon: ProductIcon,
      title: 'Products',
      menu: ['All', 'New', 'Archived']
    },
    {
      Icon: ShoppingCart,
      title: 'Orders',
      menu: ['Fulfilled', 'Pending', 'Returns']
    },
    {
      Icon: ShoppingBasket,
      title: 'Collections',
      menu: ['All', 'Top ranking', 'Archived']
    },
    {
      Icon: LocalOffer,
      title: 'Promotions',
      menu: ['Gift cards', 'Running', 'Archived']
    },
    {
      Icon: SupervisorAccount,
      title: 'Customers',
      menu: ['All', 'New', 'Returning']
    },
    {
      Icon: DashboardCustomize,
      title: 'Apps',
      menu: ['Private', 'Installed', 'Marketplace']
    },
    {
      Icon: Payments,
      title: 'Payments',
      menu: ['Outgoing', 'Gateways', 'Incoming']
    },
  ]
  const [selected, setSelected]= useState(links[0])
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorText, setAnchorText] = React.useState(links[0].title);

  const handlePopoverOpen = (event, link) => {
    setAnchorEl(event.currentTarget);
    setAnchorText(link.title)
  };

  const handlePopoverClose = (e, link) => {
    setAnchorEl(null);
    setAnchorText(link.title)
  };

  const open = Boolean(anchorEl);
  return (
    <div className={styles.wrapper}>
      <div className={styles.left}>
        {links.map((link) => {
          const { Icon, title } = link;
          const current = selected.title === title;
          return (
          <IconButton
            key={title}
            aria-label={title}
            size="medium"
            className={cln(styles.button, { [styles.selected]: current })}
            onClick={() => setSelected(link)}
            aria-owns={open ? 'mouse-over-popover' : undefined}
            aria-haspopup="true"
            onMouseEnter={(e) => handlePopoverOpen(e, link)}
            onMouseLeave={(e) => handlePopoverClose(e, link)}
          >
            <Icon fontSize="small" lassName={styles.icon} htmlColor={current ? "#0156A4": ''}/>
          </IconButton>
        )})}
        {/* <Popover
          id="mouse-over-popover"
          sx={{
            pointerEvents: 'none',
          }}
          open={open}
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          onClose={handlePopoverClose}
          disableRestoreFocus
        >
          <Typography sx={{ p: 1 }}>{anchorText}</Typography>
        </Popover> */}
      </div>
      <div className={styles.right}>
        <Typography className={styles.title}>{selected.title}</Typography>
        <Divider className={styles.divider}/>
        <List component="nav" aria-label="secondary mailbox folder">
          {selected.menu.map(item => (
        <ListItemButton key={item}>
          <ListItemText primary={item} />
        </ListItemButton>
          ))}
      </List>
      </div>
      
    </div>
  )
}

export default Sidebar
