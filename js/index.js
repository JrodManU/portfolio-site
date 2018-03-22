class Heading extends React.Component {
  render() {
    return(
      <header id="pageHeader">
        <h1>Jared&#39;s Portfolio</h1>
      </header>
    );
  }
}

class Footing extends React.Component {
  render() {
    return (
      <footer>
        <a href="mailto:jaredmrobbins13@gmail.com">jaredmrobbins13@gmail.com</a>
        <a href="https://github.com/JrodManU">Github</a>
        <a href="https://jrodmanu.itch.io/">itch.io</a>
        <a href="https://play.google.com/store/apps/developer?id=Jared+Robbins&hl=en">Google Play</a>
      </footer>
    );
  }
}

class Selfie extends React.Component {
  render() {
    return (
      <img id="selfie" alt="selfie" src="imgs/selfie.jpg"></img>
    );
  }
}

class Item extends React.Component {
  render() {
    return (
      <div className="item">
        <a target="blank" href="{this.props.link}">{this.props.title}</a>
        <p>{this.props.text}</p>
      </div>
    );
  }
}

class ItemContainer extends React.Component {
  render() {
    return (
      <div id="itemContainer">
        <Item title="Meteor.js" link="https://github.com/JrodManU/eternity-website" text="I used this tool to create a website for a business with a team. I was the project leader and programmed most of the code. Using Meteor.js was a great experience for me because it introduced me to web frameworks and making a website with a backend."/>
        <Selfie />
        <Item title="Phaser" link="https://github.com/JrodManU/deforester-show" text="Phaser is a javascript game framework that allows for a game to be run on any platform. When partnered with Electron, I was able to package the game into an exe. I programmed that majority of the game and instructed my team members on what to do. I had to learn a lot more than I already knew about javascript like Prototypal Inheritance and other topics."/>
        <Item title="Python" link="https://github.com/JrodManU/news-scraper" text="On a request from a friend, I created a web scraper in Python in order to aggregate news-release links. First I used scrapy to scrape websites for links, then I used Reddit's API via praw to post them to Reddit. The bot runs on an EC2 and works great."/>
        <Item title="Ruby on Rails" link="http://jrodman.us/" text="(If the link above does not work, try google searching FTW Candles. The above link was used during development) I led a team creating a e-commerce store using Rails for a local startup. While in development I had to use many different tools on AWS and learn a lot about Rails and web development."/>
        <Item title="Scratch" link="https://scratch.mit.edu/projects/1569503/" text="This project dates all the way back to 2011 when I was twelve years old. I've had a passion for programming ever since then. My project was featured on the front page and now has 8600+ views. They even added it to the wiki page for game types!"/>
        <Item title="Unity/C#" link="https://jrodmanu.itch.io/nam-tunnels" text="Unity is an IDE and game engine for developing games. It's really great for developing games quickly and I've made many things with it. I learned C# from using Unity, and it has helped me in many other areas of development too. Also, with this specific project I'm satisfied with my design skills."/>
        <Item title="Libgdx/Java" link="https://jrodmanu.itch.io/laser-jumper" text="Libgdx is a java game framework (no IDE) that I used to create multiple different projects. Libgdx was actually the first tool I used to create a full game. I learned a lot about OOP and taught myself Java."/>
        <Item title="App Development" link="https://play.google.com/store/apps/developer?id=Jared+Robbins&hl=en" text="I've created multiple different apps using different tools for mobile devices, both iPhones and Androids. I no longer possess my IOS developer liscence, but I retain some games on the Google Play store."/>
        <Item title="React" link="https://github.com/JrodManU/portfolio-site" text="React is a relatively new tool in my toolbox, but I like how it works and plan to continue learning about it. In fact, some of this website's UI was made using React (The nine items). As a developer, it is very valuable to continuously learn and improve skills, and React is one of the ways I am doing that."/>
      </div>
    );
  }
}

ReactDOM.render(
  <div id="pageContainer">
    <Heading />
    <ItemContainer />
    <Footing />
  </div>,
  document.getElementById("jsContainer")
);
