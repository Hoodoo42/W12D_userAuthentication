let loginSuccess = Cookies.get(`loginToken`);

if (loginSuccess) {
  document.body.insertAdjacentHTML(
    `afterbegin`,
    `<h3>Welcome!You have successfully logged in.</h3>`
  );

  axios
    .request({
      url: `https://reqres.in/api/unknown`,
    })
    .then(loggedInSuccess)
    .catch(loggedInFailure);

  function loggedInSuccess(res) {
    for (i = 0; i < res[`data`][`data`].length; i++) {
      let colourContainer = document.getElementById(`colour_container`);

      let colourBox = document.createElement(`colour_box`);
      colourBox[`style`][`backgroundColor`] = `${
        res[`data`][`data`][i][`color`]
      }`;

      colourContainer[`innerHTML`] =
        colourContainer[`innerHTML`] +
        `<h3>${res[`data`][`data`][i][`name`]}</h3>` +
        `<h4>${res[`data`][`data`][i][`year`]}</h4>` +
        `<div id="colour_box"></div>`;
    }
  }

  function loggedInFailure(err) {}
} else {
  document.body.insertAdjacentHTML(
    `afterbegin`,
    `<h3>Uh Oh!You are not logged in.</h3>`,

    function backHome(details) {
      location.href = `index.html`;
    }
  );
}
