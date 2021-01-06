import React from "react";
import {
  SearchSharp,
  ArrowRightSharp,
  StarSharp,
  VerifiedUserSharp
} from "@material-ui/icons";

export let Home = function (props) {
  let nextPage = () => {
    props.history.push("/token");
  };
  return (
    <main>
      <header>
        <h3>GitHub Search</h3>
        <p>
          A simple application that displays all the{" "}
          <a
            rel="noopener noreferrer"
            href="https://docs.github.com/en/free-pro-team@latest/graphql/reference/objects#topic"
            target="_blank"
          >
            <u>topics</u>
          </a>{" "}
          related to the term "react", using the GitHub GraphQL API.
        </p>
      </header>

      <div>
        <ul>
          <li>
            <VerifiedUserSharp
              className="icon"
              fontSize="large"
            ></VerifiedUserSharp>
            Validate your Access token
          </li>
          <li>
            <SearchSharp className="icon" fontSize="large"></SearchSharp>
            Find a GitHub Public Repo
          </li>
          <li>
            <ArrowRightSharp
              className="icon"
              fontSize="large"
            ></ArrowRightSharp>
            Provides the repo details of Results
          </li>
          <li>
            <StarSharp className="icon" fontSize="large"></StarSharp>
            Star or watch your favoriate git repo
          </li>
        </ul>

        <button class="btn-inline" onClick={nextPage}>
          Start Validate
        </button>
      </div>
    </main>
  );
};
