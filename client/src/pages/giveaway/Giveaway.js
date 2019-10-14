import React, { Component } from "react";
// import Navbar from "../../partials/navbar/Navbar";
import Footer from "../../partials/footer/Footer";
import "../gamelist/gamelist.css";
import "./giveaway.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Giveaway extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    // const {
    //   match: { params }
    // } = this.props;
  }

  componentWillUnmount() {}

  render() {
    return (
      <div id="page-giveaway">
        {/* <Navbar /> */}
        <div className="game-container">
          <div id="game-intro">
            <h1>LUBESY'S GIVEAWAY LIST</h1>
            <p>Below is a list of games that I will be giving away!</p>
            <p>
              As I acquire codes and Humble Bundles, I will add them to the
              list.
            </p>
            <p>
              Once every two weeks, we raffle a chance to win a game! If you are
              a winner, please select one of these games and let me know which
              you'd like to recieve. Once you claim the code, let me know if it
              worked!
            </p>
            <br />
            <div id="tips-and-winners">
              <div id="tips-section">
                <h2>TIPS</h2>
                <ol>
                  <li>Hover over a game cover to see its description</li>
                  <li>
                    Click the{" "}
                    <div className="media-wrapper">
                      <FontAwesomeIcon
                        icon={["fab", "youtube-square"]}
                        id="yt-s"
                      />{" "}
                      <FontAwesomeIcon
                        icon={["fab", "steam-square"]}
                        id="steam"
                      />{" "}
                      <FontAwesomeIcon icon={["fab", "twitch"]} id="twitch" />{" "}
                      or{" "}
                      <FontAwesomeIcon
                        icon={["fab", "vimeo-square"]}
                        id="v-s"
                      />
                    </div>{" "}
                    to see gameplay or a trailer
                  </li>
                  <br />
                  <li>
                    For a list of games that I might play on stream, click{" "}
                    <a href="/gamelist">here</a>
                  </li>
                </ol>
              </div>
              <div id="giveaway-section">
                <h2>PAST WINNERS</h2>
                <ul>
                  <li>ealonmann</li>
                  <li>hasagiotp</li>
                  <li>lessthandennis</li>
                  <li>keeelaan</li>
                  <li>kitreine</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="game-row">
            <div className="game-card">
              <p>God's Trigger</p>
              {/* change me */}
              <img
                className="game-window"
                src="https://www.mobygames.com/images/covers/l/553746-god-s-trigger-xbox-one-front-cover.jpg"
                alt=""
                title="Slay enemies with speed and precision in an over-the-top show of blood and explosions. Play solo or with others, make split-second decisions, dodge bullets, and use weapons and abilities to inflict violence in the most graphic way possible."
              />
              {/* change me x2 */}
              <div className="media-wrapper">
                <a
                  className="game-preview"
                  href="https://www.youtube.com/watch?v=_2nN26GearI"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {/* change me */}
                  <FontAwesomeIcon icon={["fab", "youtube-square"]} id="yt-s" />
                </a>
                <a
                  className="game-preview"
                  href="https://store.steampowered.com/app/488730/Gods_Trigger/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {/* change me */}
                  <FontAwesomeIcon icon={["fab", "steam-square"]} id="steam" />
                </a>
              </div>
            </div>
            <div className="game-card">
              <p>Avernum 3: Ruined World</p>
              {/* change me */}
              <img
                className="game-window"
                src="https://steamcdn-a.akamaihd.net/steam/apps/691830/header.jpg"
                alt=""
                title="Wander free through this epic, indie fantasy adventure. Explore a huge world that evolves as time passes. Towns fight battles. Refugees flee. Disasters happen. Features cunning adventures, great depth, and unlimited freedom. Be a merchant or bounty hunter, buy a home, save the world!"
              />
              {/* change me x2 */}
              <div className="media-wrapper">
                <a
                  className="game-preview"
                  href="https://www.youtube.com/watch?v=w86nnJ3zi3s"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {/* change me */}
                  <FontAwesomeIcon icon={["fab", "youtube-square"]} id="yt-s" />
                </a>
                <a
                  className="game-preview"
                  href="https://store.steampowered.com/app/691830/Avernum_3_Ruined_World/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {/* change me */}
                  <FontAwesomeIcon icon={["fab", "steam-square"]} id="steam" />
                </a>
              </div>
            </div>
            <div className="game-card">
              <p>The Adventure Pals</p>
              {/* change me */}
              <img
                className="game-window"
                src="https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTcxy5dKT1L.ec5XfvGeNW8CIjx1mRoKq2ikbvFn5JezwTQEYsut05wPRbFq.hzLQT67Nl3EIaub1idsUEXjqycxWkdF28lCb20v9JegHZE.fhPpe.FfgH.rsiI8BPomupVYcuCSBkeEsXBdZgmCmBq2H_k3FIezNORnlO0Jq9mcxk-&w=200&h=300&format=jpg"
                alt=""
                title="The Super Adventure Pals series is back for another action-packed story, but this time the stakes are higher, the characters are wackier and the pets are more… giraffeier?"
              />
              {/* change me x2 */}
              <div className="media-wrapper">
                <a
                  className="game-preview"
                  href="https://www.youtube.com/watch?v=LVOyq-W6A_o"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {/* change me */}
                  <FontAwesomeIcon icon={["fab", "youtube-square"]} id="yt-s" />
                </a>
                <a
                  className="game-preview"
                  href="https://store.steampowered.com/app/396710/The_Adventure_Pals/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {/* change me */}
                  <FontAwesomeIcon icon={["fab", "steam-square"]} id="steam" />
                </a>
              </div>
            </div>
            <div className="game-card">
              <p>Almost There: The Platformer</p>
              {/* change me */}
              <img
                className="game-window"
                src="https://images.igdb.com/igdb/image/upload/t_cover_big/co1j47.jpg"
                alt=""
                title="Sprint between saw blades while dodging homing missiles. Duck under lasers while the floor crumbles beneath you. Almost There was designed specifically for fans of the hardcore platforming genre - you've been warned."
              />
              {/* change me x2 */}
              <div className="media-wrapper">
                <a
                  className="game-preview"
                  href="https://www.youtube.com/watch?v=tQIJj7gEoQ4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {/* change me */}
                  <FontAwesomeIcon icon={["fab", "youtube-square"]} id="yt-s" />
                </a>
                <a
                  className="game-preview"
                  href="https://store.steampowered.com/app/951940/Almost_There_The_Platformer/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {/* change me */}
                  <FontAwesomeIcon icon={["fab", "steam-square"]} id="steam" />
                </a>
              </div>
            </div>
            <div className="game-card">
              <p>Rising Storm 2: Vietnam</p>
              {/* change me */}
              <img
                className="game-window"
                src="https://images.g2a.com/newlayout/323x433/1x1x0/641ccfce9e55/59e772025bafe336de4cd894"
                alt=""
                title="Red Orchestra Series' take on Vietnam: 64-player MP matches; 20+ maps; US Army & Marines, PAVN/NVA, NLF/VC; Australians and ARVN forces; 50+ weapons; 4 flyable helicopters; mines, traps and tunnels; Brutal. Authentic. Gritty. Character customization. And napalm in the morning."
              />
              {/* change me x2 */}
              <div className="media-wrapper">
                <a
                  className="game-preview"
                  href="https://www.youtube.com/watch?v=YqyeNcNKxXs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {/* change me */}
                  <FontAwesomeIcon icon={["fab", "youtube-square"]} id="yt-s" />
                </a>
                <a
                  className="game-preview"
                  href="https://store.steampowered.com/app/418460/Rising_Storm_2_Vietnam/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {/* change me */}
                  <FontAwesomeIcon icon={["fab", "steam-square"]} id="steam" />
                </a>
              </div>
            </div>
            <div className="game-card">
              <p>Swords and Soldiers 2 Shawarmageddon</p>
              {/* change me */}
              <img
                className="game-window"
                src="https://images.igdb.com/igdb/image/upload/t_cover_big/pqzufh6wzfhjs9ctpt0a.jpg"
                alt=""
                title="Take command of mighty Vikings, sly Persians or brutish Demons! Destroy your opponent’s base while defending your own in this action-packed side-scrolling RTS!"
              />
              {/* change me x2 */}
              <div className="media-wrapper">
                <a
                  className="game-preview"
                  href="https://www.youtube.com/watch?v=9Qu-YxDrtGs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {/* change me */}
                  <FontAwesomeIcon icon={["fab", "youtube-square"]} id="yt-s" />
                </a>
                <a
                  className="game-preview"
                  href="https://store.steampowered.com/app/703880/Swords_and_Soldiers_2_Shawarmageddon/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {/* change me */}
                  <FontAwesomeIcon icon={["fab", "steam-square"]} id="steam" />
                </a>
              </div>
            </div>
          </div>
          <div className="game-row">
            <div className="game-card">
              <p>MOTHERGUNSHIP</p>
              {/* change me */}
              <img
                className="game-window"
                src="https://www.mobygames.com/images/covers/l/494697-mothergunship-xbox-one-front-cover.jpg"
                alt=""
                title="MOTHERGUNSHIP is a bullet-hell FPS where you craft your own guns, fight gigantic bosses, and defeat a robotic alien armada that conquered Earth. Face off against overwhelming odds in brutal, non-stop combats where thinking on your feet is the only way to survive."
              />
              {/* change me x2 */}
              <div className="media-wrapper">
                <a
                  className="game-preview"
                  href="https://www.youtube.com/watch?v=6DPW5tRU6bo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {/* change me */}
                  <FontAwesomeIcon icon={["fab", "youtube-square"]} id="yt-s" />
                </a>
                <a
                  className="game-preview"
                  href="https://store.steampowered.com/app/574090/MOTHERGUNSHIP/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {/* change me */}
                  <FontAwesomeIcon icon={["fab", "steam-square"]} id="steam" />
                </a>
              </div>
            </div>
            <div className="game-card">
              <p>Slay the Spire</p>
              {/* change me */}
              <img
                className="game-window"
                src="https://www.mobygames.com/images/covers/l/561995-slay-the-spire-playstation-4-front-cover.jpg"
                alt=""
                title="We fused card games and roguelikes together to make the best single player deckbuilder we could. Craft a unique deck, encounter bizarre creatures, discover relics of immense power, and Slay the Spire!"
              />
              {/* change me x2 */}
              <div className="media-wrapper">
                <a
                  className="game-preview"
                  href="https://www.youtube.com/watch?v=9SZUtyYSOjQ"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {/* change me */}
                  <FontAwesomeIcon icon={["fab", "youtube-square"]} id="yt-s" />
                </a>
                <a
                  className="game-preview"
                  href="https://store.steampowered.com/app/646570/Slay_the_Spire/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {/* change me */}
                  <FontAwesomeIcon icon={["fab", "steam-square"]} id="steam" />
                </a>
              </div>
            </div>
            <div className="game-card">
              <p>Squad (Early Access)</p>
              {/* change me */}
              <img
                className="game-window"
                src="https://steamcdn-a.akamaihd.net/steam/apps/393380/header.jpg?t=1564509716"
                alt=""
                title="Squad is a tactical FPS that provides authentic combat experiences through teamwork, communication, and gameplay. It seeks to bridge the large gap between arcade shooter and military simulation. Large scale, combined arms combat, base building, and a great integrated VoIP system."
              />
              {/* change me x2 */}
              <div className="media-wrapper">
                <a
                  className="game-preview"
                  href="https://www.youtube.com/watch?v=wdAiAcXW8z0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {/* change me */}
                  <FontAwesomeIcon icon={["fab", "youtube-square"]} id="yt-s" />
                </a>
                <a
                  className="game-preview"
                  href="https://store.steampowered.com/app/393380/Squad/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {/* change me */}
                  <FontAwesomeIcon icon={["fab", "steam-square"]} id="steam" />
                </a>
              </div>
            </div>
            <div className="game-card">
              <p>BATTLETECH + 2 Expansions</p>
              {/* change me */}
              <img
                className="game-window"
                src="https://upload.wikimedia.org/wikipedia/en/thumb/0/08/BattleTech_cover.jpg/220px-BattleTech_cover.jpg"
                alt=""
                title="Take command of your own mercenary outfit of 'Mechs and the MechWarriors that pilot them, struggling to stay afloat as you find yourself drawn into a brutal interstellar civil war."
              />
              {/* change me x2 */}
              <div className="media-wrapper">
                <a
                  className="game-preview"
                  href="https://www.youtube.com/watch?v=tsIMfOo_VO0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {/* change me */}
                  <FontAwesomeIcon icon={["fab", "youtube-square"]} id="yt-s" />
                </a>
                <a
                  className="game-preview"
                  href="https://store.steampowered.com/app/637090/BATTLETECH/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {/* change me */}
                  <FontAwesomeIcon icon={["fab", "steam-square"]} id="steam" />
                </a>
              </div>
            </div>
            <div className="game-card">
              <p>Override: Mech City Brawl</p>
              {/* change me */}
              <img
                className="game-window"
                src="https://gpstatic.com/acache/41/53/1/us/packshot-d4cc2cffbee27937ced7d68525125b05.jpg"
                alt=""
                title="No gears, no glory! Control gigantic robots and duke it out in this 3D mech brawler! Epic battles await in local and online Versus mode, 4-player Co-op – where each player controls one part of a mech – and a single-player game mode. Each mech has its own gameplay style, special moves, and finishers."
              />
              {/* change me x2 */}
              <div className="media-wrapper">
                <a
                  className="game-preview"
                  href="https://www.youtube.com/watch?v=T1IdFwREhyQ"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {/* change me */}
                  <FontAwesomeIcon icon={["fab", "youtube-square"]} id="yt-s" />
                </a>
                <a
                  className="game-preview"
                  href="https://store.steampowered.com/app/709440/Override_Mech_City_Brawl/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {/* change me */}
                  <FontAwesomeIcon icon={["fab", "steam-square"]} id="steam" />
                </a>
              </div>
            </div>
          </div>
          <div className="game-row">
            <div className="game-card">
              <p>Planet Alpha</p>
              {/* change me */}
              <img
                className="game-window"
                src="https://s2.gaming-cdn.com/images/products/3106/271x377/planet-alpha-cover.jpg"
                alt=""
                title="PLANET ALPHA, a beautiful alien world filled with mystery and danger. Pursued by relentless enemies, you must harness the power of night and day as you struggle to survive."
              />
              {/* change me x2 */}
              <div className="media-wrapper">
                <a
                  className="game-preview"
                  href="https://www.youtube.com/watch?v=VbDfgHOVcpY"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {/* change me */}
                  <FontAwesomeIcon icon={["fab", "youtube-square"]} id="yt-s" />
                </a>
                <a
                  className="game-preview"
                  href="https://store.steampowered.com/app/485030/PLANET_ALPHA/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {/* change me */}
                  <FontAwesomeIcon icon={["fab", "steam-square"]} id="steam" />
                </a>
              </div>
            </div>
            <div className="game-card">
              <p>Sonic Mania</p>
              {/* change me */}
              <img
                className="game-window"
                src="https://gpstatic.com/acache/32/88/1/us/packshot-72352d14bca26ab7aaf68b9832882eda.jpg"
                alt=""
                title="Sonic Mania is an all-new adventure with Sonic, Tails, and Knuckles full of unique bosses, rolling 2D landscapes, and fun classic gameplay."
              />
              {/* change me x2 */}
              <div className="media-wrapper">
                <a
                  className="game-preview"
                  href="https://www.youtube.com/watch?v=ZoXyeFeOXnY"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {/* change me */}
                  <FontAwesomeIcon icon={["fab", "youtube-square"]} id="yt-s" />
                </a>
                <a
                  className="game-preview"
                  href="https://store.steampowered.com/app/584400/Sonic_Mania/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {/* change me */}
                  <FontAwesomeIcon icon={["fab", "steam-square"]} id="steam" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default Giveaway;
