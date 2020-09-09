/*
// Router Mode In ReactJS



import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
class ReactDemo extends React.Component{
 
  render(){
    
      return(
          <div>
              <Router>
                  <div>
                     <Header/>
                     <Component/>

                  </div>
              </Router>
          </div>
      )
  }
}

function Component(){
    return(
        <>
             <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/services" component={Services} />
                    <Route path="/contact" component={Contact} />
                    <Route  component={PageNotFound} />
                    </Switch>
        </>
    )
}

function Header(){
    return(
        <>
             <ul>
                          <li><Link to="/">Home</Link></li>
                          <li><Link to="/about">About</Link></li>
                          <li><Link to="/services">Services</Link></li>
                          <li><Link to="/contact">Contact Us</Link></li>
                          <li><Link to="/khan">Khan</Link></li>
                      </ul>
        </>
    )
}

function Home(){
    return(
        <>
            <h1>Home</h1>
            <p>For example, let’s say we have a component that renders the image of a cat chasing the mouse around the screen.</p>
        </>
    );
}
function About(){
    return(
        <>
            <h1>About Us</h1>
            <p>For example, let’s say we have a component that renders the image of a cat chasing the mouse around the screen. We might use a  prop to tell the component the coordinates of the mouse so it knows where to position the image on the screen.</p>
        </>
    );
}
function Services(){
    return(
        <>
            <h1>Services</h1>
            <ul>
                <li>Website Designing</li>
                <li>Website Development</li>
                <li>SEO Services</li>
                <li>Mobile App Development</li>
            </ul>
        </>
    );
}
function Contact(){
    return(
        <>
            <h1>Contact Us</h1>
            <ul>
                <li>Email Id: zaidkhan5548@gmail.com</li>
                <li>Name : Zaid Khan</li>
            </ul>
        </>
    );
}
function PageNotFound(){
    return(
        <>
            <h1>404 Error</h1>
            <p>OOPs! Page Not Found.</p>
            
        </>
    );
}

export default ReactDemo;*/



/*
//Nested Router Mode In ReactJS



import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
class ReactDemo extends React.Component {

    render() {

        return (
            <div>
                <Router>
                    <div>
                        <Header />
                        <Component />

                    </div>
                </Router>
            </div>
        )
    }
}

function Component() {
    return (
        <>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/services" component={Services} />
                <Route path="/contact" component={Contact} />
                <Route component={PageNotFound} />
            </Switch>
        </>
    )
}

function Header() {
    return (
        <>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
                <li><Link to="/khan">Khan</Link></li>
            </ul>
        </>
    )
}

function Home() {
    return (
        <>
            <h1>Home</h1>
            <p>For example, let’s say we have a component that renders the image of a cat chasing the mouse around the screen.</p>
        </>
    );
}
function About() {
    return (
        <>
            <h1>About Us</h1>
            <p>For example, let’s say we have a component that renders the image of a cat chasing the mouse around the screen. We might use a  prop to tell the component the coordinates of the mouse so it knows where to position the image on the screen.</p>
        </>
    );
}
function Services({ match, location, history }) {

    return (
        <>
            <h1>Services</h1>
            <ul>
                <li><Link to={`${match.path}/website-designing`}> Website Designing</Link></li>
                <li><Link to={`${match.path}/website-development`}> Website Development</Link></li>
                <li><Link to={`${match.path}/seo-services`}>SEO Services</Link></li>
                <li><Link to={`${match.path}/mobile-app-development`}> Mobile App Development</Link></li>
            </ul>

            <Switch>
                <Route path={`${match.path}/:slug`} component={service} />
            </Switch>
        </>
    );
}

function service({ match }) {

    if(match.params.slug === 'website-designing'){
    return (
        <>
            <h1>Service Details</h1>
        
                <p>Service Name: {match.params.slug} </p>

                <p>Website designing Service like: logo designing,html,css,photoshop</p>
        </>
                );
            }else{
return(
    <>
    <h1>Services Name: {match.params.slug}</h1>
    </>
)
            }
}


function Contact() {
    return (
        <>
            <h1>Contact Us</h1>
            <ul>
                <li>Email Id: zaidkhan5548@gmail.com</li>
                <li>Name : Zaid Khan</li>
            </ul>
        </>
    );
}
function PageNotFound() {
    return (
        <>
            <h1>404 Error</h1>
            <p>OOPs! Page Not Found.</p>

        </>
    );
}

export default ReactDemo;*/









//Nested Router with Class Component Mode In ReactJS



import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
class ReactDemo extends React.Component {

    render() {

        return (
            <div>
                <Router>
                    <div>
                        <Header />
                        <Component />

                    </div>
                </Router>
            </div>
        )
    }
}

function Component() {
    return (
        <>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/services" component={Services} />
                <Route path="/contact" component={Contact} />
                <Route component={PageNotFound} />
            </Switch>
        </>
    )
}

function Header() {
    return (
        <>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
                <li><Link to="/khan">Khan</Link></li>
            </ul>
        </>
    )
}

function Home() {
    return (
        <>
            <h1>Home</h1>
            <p>For example, let’s say we have a component that renders the image of a cat chasing the mouse around the screen.</p>
        </>
    );
}
function About() {
    return (
        <>
            <h1>About Us</h1>
            <p>For example, let’s say we have a component that renders the image of a cat chasing the mouse around the screen. We might use a  prop to tell the component the coordinates of the mouse so it knows where to position the image on the screen.</p>
        </>
    );
}
function Services({ match, location, history }) {

    return (
        <>
            <h1>Services</h1>
            <ul>
                <li><Link to={`${match.path}/website-designing`}> Website Designing</Link></li>
                <li><Link to={`${match.path}/website-development`}> Website Development</Link></li>
                <li><Link to={`${match.path}/seo-services`}>SEO Services</Link></li>
                <li><Link to={`${match.path}/mobile-app-development`}> Mobile App Development</Link></li>
            </ul>

            <Switch>
                <Route path={`${match.path}/:slug`} component={service} />
            </Switch>
        </>
    );
}

class service extends React.Component {

    render() {
        const {match}=this.props;
        if (match.params.slug === 'website-designing') {
            return (
                <>
                    <h1>Service Details</h1>

                    <p>Service Name: {match.params.slug} </p>

                    <p>Website designing Service like: logo designing,html,css,photoshop</p>
                </>
            );
        } else {
            return (
                <>
                    <h1>Services Name: {match.params.slug}</h1>
                </>
            )
        }
    }
}


function Contact() {
    return (
        <>
            <h1>Contact Us</h1>
            <ul>
                <li>Email Id: zaidkhan5548@gmail.com</li>
                <li>Name : Zaid Khan</li>
            </ul>
        </>
    );
}
function PageNotFound() {
    return (
        <>
            <h1>404 Error</h1>
            <p>OOPs! Page Not Found.</p>

        </>
    );
}

export default ReactDemo;