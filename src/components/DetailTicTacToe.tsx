/** @format */

import React from "react";
import LayoutDescription from "./LayoutDescription";

const DetailTicTacToe = () => {
  return (
    <LayoutDescription title="Tic Tac Toe">
      <p>
        Tic Tac Toe with Emoji Song Guessing is a fun and engaging application
        designed specifically for office games. This unique twist on the classic
        Tic Tac Toe game combines strategic gameplay with the excitement of
        guessing songs based on emojis. Players take turns marking their spots
        on the grid while also trying to decipher the song titles represented by
        a series of emoticons. Perfect for team bonding and light-hearted
        competition, this game encourages creativity and collaboration among
        colleagues. Whether you're on a break or looking to boost morale, Tic
        Tac Toe with Emoji Song Guessing provides an entertaining way to unwind
        and connect with your coworkers.
      </p>
      <div>
        <p>Github Link</p>
        <a
          href="https://github.com/Lustiyana/tic-tac-toe-nextjs"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 underline"
        >
          https://github.com/Lustiyana/tic-tac-toe-nextjs
        </a>
      </div>
    </LayoutDescription>
  );
};

export default DetailTicTacToe;
