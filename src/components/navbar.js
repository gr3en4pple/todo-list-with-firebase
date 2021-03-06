import React from 'react';
import '../App.css';
import { useAuth } from '../AuthContext';
import avatar from '../pictures/avatar.png';
import { SvgIcon, IconButton } from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
const NavbarBtn = ({ Icon, desc, onClick }) => {
  const onClickHandler = () => onClick(desc);
  return (
    <div onClick={onClickHandler} className="navbar__btn">
      <Icon className="navbar__icon" />
      <div className="navbar__btn-desc">{desc}</div>
    </div>
  );
};

const Navbar = ({ dropSwitchHandler, Icons: [LoginIcon, RegisterIcon] }) => {
  const { user, isUserLoad, signOut, setCurrentForm } = useAuth();

  const onClickHandler = (form) => {
    if (form !== '') {
      setCurrentForm(form);
    }
  };
  const onSignoutHandler = () => {
    signOut();
  };

  return (
    <nav className="navbar__inner">
      <div className="navbar__title">TODO LIST</div>
      {(!isUserLoad && !user && (
        <div className="navbar__option">
          <NavbarBtn onClick={onClickHandler} Icon={LoginIcon} desc={'Login'} />
          <NavbarBtn
            onClick={onClickHandler}
            Icon={RegisterIcon}
            desc={'Register'}
          />
        </div>
      )) ||
        (!isUserLoad && user && (
          <div className="navbar__option">
            <div className="navbar__profile">
              <img
                alt="avatar"
                onClick={dropSwitchHandler}
                src={avatar}
                className="navbar__avatar"
              ></img>
            </div>
            <IconButton onClick={onSignoutHandler}>
              <SvgIcon htmlColor="#fff">
                <ExitToAppIcon />
              </SvgIcon>
            </IconButton>
          </div>
        ))}
    </nav>
  );
};

export default Navbar;
