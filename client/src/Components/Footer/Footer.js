import React from "react";

import "../Footer/footer.css";

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      members: [
        { name: "Diane", github: "https://github.com/dkm94" },
        { name: "Sarah", github: "https://github.com/sarahnuran" },
        { name: "Mandel", github: "https://github.com/Mandel-AG" },
        { name: "Pierre-Alain", github: "https://github.com/Pierre-Alain8" },
      ],
    };
  }

  render() {
    const members = this.state.members.map((member) => {
      return (
        <li className="link-list">
          <a href={member.github}>
            <i className="fab fa-github" aria-hidden="true"></i>
            <span> -{member.name}</span>
          </a>
        </li>
      );
    });

    return (
      <footer>
        <p>&copy; Copyright 2020 / Made By</p>
        <ul className="list-of-members"> {members}</ul>
      </footer>
    );
  }
}
export default Footer;
