import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/tr3atm3");
    const json = await data.json();
    this.setState({ userInfo: json });
    console.log(json);
  }

  componentDidUpdate() {
    console.log("Hey Component updated");
  }

  componentWillUnmount() {
    console.log("Component unmounted");
  }

  render() {
    const {
      name,
      location,
      bio,
      html_url,
      public_repos,
      repos_url,
      twitter_username,
    } = this.state.userInfo;

    if (!name) {
      return <h2>Fetching data from github...</h2>;
    }
    return (
      <>
        <div className="user-card">
          <h3>Name: {name}</h3>
          <h3>Location: {location}</h3>
          <h3>Bio: {bio}</h3>
          <h3>
            Link to Github:{" "}
            <a href={html_url} target="_blank">
              {html_url}
            </a>
          </h3>
          <h3>Repos: {public_repos}</h3>
          <h3>
            Link to Repos:{" "}
            <a
              href="https://github.com/tr3atm3?tab=repositories"
              target="_blank"
            >
              https://github.com/tr3atm3?tab=repositories
            </a>
          </h3>
          <h3>
            Contact on Twitter:{" "}
            <a target="_blank" href="https://twitter.com/TusharS70068008">
              {twitter_username}
            </a>
          </h3>
        </div>
        <div>
          <h2>Fetched Data from Github Rest Api</h2>
        </div>
      </>
    );
  }
}

export default UserClass;
