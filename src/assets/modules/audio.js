const log = console.log.bind(console);

export default class audio {
  constructor(sounds) {
    this.audioCtx = new AudioContext();
    this.soundBuffer = {};
  }

  get audio() {
    return this.sound();
  }

  sound() {
    Promise.all([paperSound, buttonSound])
      .then((rs) => {
        [lowerCaseCursive, numberCharacters] = [
          rs[0].data,
          rs[1].data,
          rs[2].data,
          rs[3].data,
          rs[4].data,
        ];
        return {
          tune: rs[5],
          buttonSound: rs[6],
          openMenu: rs[7],
          closeMenu: rs[8],
        };
      })

      .then((rs) => {
        return Promise.all([
          rs.tune.arrayBuffer(),
          rs.buttonSound.arrayBuffer(),
          rs.openMenu.arrayBuffer(),
          rs.closeMenu.arrayBuffer(),
        ]).then((rs) => {
          return {
            tune: rs[0],
            buttonSound: rs[1],
            openMenu: rs[2],
            closeMenu: rs[3],
          };
        });
      })

      .then(async (rs) => {
        await audioCtx.decodeAudioData(rs.tune).then((rs) => {
          musicBuffer.gameTune = rs;
        });
        await audioCtx.decodeAudioData(rs.buttonSound).then((rs) => {
          soundBuffer.buttonSound = rs;
        });
        await audioCtx.decodeAudioData(rs.openMenu).then((rs) => {
          soundBuffer.openMenu = rs;
        });
        await audioCtx.decodeAudioData(rs.closeMenu).then((rs) => {
          soundBuffer.closeMenu = rs;
        });
      })

      .then(() => {
        document.getElementById("loading").innerHTML =
          "<div class='loader'>Tap Here!</div>";
        document
          .querySelectorAll(".loader")[0]
          .addEventListener("click", (e) => {
            document.getElementById("loading").style.display = "none";
            ToolTip.init(false);
          });
      });
  }
}
