function loginAttempt(details) {
  let emailValue = document.getElementById(`email_input`)[`value`];
  let passwordValue = document.getElementById(`password_input`)[`value`];

  axios
    .request({
      url: `https://reqres.in/api/login`,

      method: `POST`,

      data: {
        email: emailValue,
        password: passwordValue,
      },
    })
    .then(loginSuccess)
    .catch(loginFailure);
}

function loginSuccess(resp) {
  token = resp[`data`][`token`];
  Cookies.set(`loginToken`, token);
  location.href = `home.html`;
}
function loginFailure(err) {
  document.body.insertAdjacentHTML(
    `afterbegin`,
    `
<h3>Login Error</h3>
`
  );
}

let loginButton = document.getElementById(`login_button`);
loginButton.addEventListener(`click`, loginAttempt);
