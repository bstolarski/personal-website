import React, {Component} from 'react';
import {IoLogoGithub, IoLogoLinkedin} from 'react-icons/io';
import {Link, animateScroll as scroll} from 'react-scroll'

export default class Header extends Component {
    state = {
        prevScrollPos: window.pageYOffset,
        visible: true
    };

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleBurger = () => {
        if (document.querySelector('.mobile-menu').classList.contains('active')) {
            document.querySelector('.nav__burger').firstElementChild.classList.remove('active');
            document.querySelector('.mobile-menu').classList.remove('active');
            document.querySelector('body').style.overflow = 'unset';

        } else {
            document.querySelector('.header').classList.remove('smaller');
            document.querySelector('.nav__burger').firstElementChild.classList.add('active');
            document.querySelector('.mobile-menu').classList.add('active');
            document.querySelector('body').style.overflow = 'hidden' ;

        }
    };
    disableBurgerMenu = ()=>{
        if (document.querySelector('.mobile-menu')) {
            document.querySelector('.mobile-menu').classList.remove('active');
            document.querySelector('.nav__burger').firstElementChild.classList.remove('active');
            document.querySelector('body').style.overflow = 'unset';
        }
    };
    handleScroll = () => {
        const {prevScrollPos} = this.state;
        const currentScrollPos = window.pageYOffset;
        let visible = null;
        if(!document.querySelector('.mobile-menu').classList.contains('active')){
            visible = prevScrollPos > currentScrollPos;
        }else{
            visible = true;
        }

        this.setState({
            prevScrollPos: currentScrollPos,
            visible
        });
        if (currentScrollPos > 100) {
            document.querySelector('.header').classList.add('smaller')
        } else {
            document.querySelector('.header').classList.remove('smaller')
        }
    };

    render() {
        return (
            <header className={this.state.visible ? 'header' : 'header hidden'}>
                <nav className="nav">
                    <div className="nav__container">
                        <a href='/'>
                            <h1 className='nav__logo' data-heading='BS'>BS</h1>

                        </a>
                    </div>
                    <div className="nav__container nav__container--burger-menu">
                        <div onClick={this.handleBurger} className="nav__burger">
                            <div className="nav__burger--line"/>
                        </div>
                    </div>
                    <div className="nav__container nav__container--default-menu">
                        <div className="menu">
                            <ul className="menu__ul">
                                <li className="menu__item">
                                    <Link spy={true} smooth={true} to='start' className="menu__item--link">Start</Link>
                                </li>
                                <li className="menu__item">
                                    <Link  spy={true} smooth={true} to='about' className="menu__item--link">About</Link>
                                </li>
                                <li className="menu__item">
                                    <Link spy={true} smooth={true} to='projects' className="menu__item--link">Projects</Link>
                                </li>
                                <li className="menu__item">
                                    <Link spy={true} smooth={true} to='contact' className="menu__item--link">Contact</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="nav__container nav__container--socials">
                        <a target="_blank"  rel="noopener noreferrer" href='https://github.com/bstolarski'>
                            <IoLogoGithub/>
                        </a>
                        <a target="_blank"  rel="noopener noreferrer"
                           href='https://www.linkedin.com/in/bart%C5%82omiej-stolarski/'>
                            <IoLogoLinkedin/>
                        </a>
                    </div>
                </nav>
                <div className="mobile-menu">
                    <aside className="sidebar" ref={node => this.node = node}>
                        <nav className='sidebar__nav'>
                            <ul className="sidebar__ul">
                                <li className="sidebar__item">
                                    <Link onClick={this.disableBurgerMenu()} spy={true} smooth={true} to='start' className='sidebar__item--link'>Start</Link>
                                </li>
                                <li className="sidebar__item">
                                    <Link onClick={this.disableBurgerMenu()} spy={true} smooth={true} to='about' className='sidebar__item--link'>About</Link>
                                </li>
                                <li className="sidebar__item">
                                    <Link onClick={this.disableBurgerMenu()} spy={true} smooth={true} to='projects' className='sidebar__item--link'>Work</Link>
                                </li>
                                <li className="sidebar__item">
                                    <Link onClick={this.disableBurgerMenu()} spy={true} smooth={true} to='contact' className='sidebar__item--link'>Contact</Link>
                                </li>
                                <li className="sidebar__item sidebar__socials">
                                    <a target="_blank"  rel="noopener noreferrer" href='https://github.com/bstolarski'>
                                        <IoLogoGithub/>
                                    </a>
                                    <a target="_blank"  rel="noopener noreferrer"
                                       href='https://www.linkedin.com/in/bart%C5%82omiej-stolarski/'>
                                        <IoLogoLinkedin/>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </aside>
                </div>
            </header>
        );
    }
}