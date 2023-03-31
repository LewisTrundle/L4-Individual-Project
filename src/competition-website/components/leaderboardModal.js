import {compData} from './text.js';

class LeaderboardModal extends HTMLElement {
  connectedCallback() {
  var modal = ``

  const NoOfRounds = Object.keys(compData).length - 1;
  for (let i = 1; i <= NoOfRounds; i++) {
    var round = "round_" + i.toString();
    modal += 
    `<div class="heading_container" id="${round}">
      <h2>Round <span>${i}</span></h2>
    </div>
    <table class="table table-hover">
      <thead class="thead-light">
        <tr>
          <th scope="col">Rank</th>
          <th scope="col">Competitor</th>
          <th scope="col">1</th>
          <th scope="col">2</th>
          <th scope="col">3</th>
          <th scope="col" class="bold">Best</th>
        </tr>
      </thead>
      <tbody>`

    const NoOfPlayers = Object.keys(compData[round]).length;
    for (let i = 1; i <= NoOfPlayers; i++) {
      var rank = i.toString();
      modal += 
      `<tr>
        <th scope="row">${rank}</th>
        <td>${compData[round][rank].name}</td>
        <td>${compData[round][rank].times[round].one}</td>
        <td>${compData[round][rank].times[round].two}</td>
        <td>${compData[round][rank].times[round].three}</td>
        <td class="bold">${compData[round][rank].times[round].best}</td>
      </tr>`
    }

    modal += `
          </tbody>
        </table>
      `
  }
  this.innerHTML = modal;
  }
};

class OveralLeaderboardModal extends HTMLElement {
  connectedCallback() {
    var modal =
    `<div class="heading_container">
      <h2>Overall</h2>
    </div>
    <table class="table table-hover">
      <thead class="thead-light">
        <tr>
          <th scope="col">Rank</th>
          <th scope="col">Competitor</th>
          <th scope="col">Tracks (/9)</th>
        </tr>
      </thead>
      <tbody>`
    
    const NoOfPlayers = Object.keys(compData["overall"]).length;
    for (let i = 1; i <= NoOfPlayers; i++) {
      var rank = i.toString();
      const competitor = compData["overall"][rank]
      modal += 
      `<tr>
        <th scope="row">${rank}</th>
        <td>${competitor.name}</td>
        <td>9</td>
      </tr>`
    }

    modal += `
          </tbody>
        </table>
      `
    this.innerHTML = modal;
  }
}

customElements.define('leaderboard-modal', LeaderboardModal);
customElements.define('overall-leaderboard-modal', OveralLeaderboardModal);