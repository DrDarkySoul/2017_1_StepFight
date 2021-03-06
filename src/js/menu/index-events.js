'use strict';

/**
 * Created by Denis on 14.02.2017.
 */
document.addEventListener('DOMContentLoaded', function () {
    let btn_play = document.getElementById('btn-play');
    let login_modal = document.getElementById('login-modal');
    let login_span = document.getElementById('login-modal-close-span');

    btn_play.addEventListener('click', function () {
        login_modal.classList.remove('hidden');
    });
    login_span.addEventListener('click', function () {
        login_modal.classList.add('hidden');
    });

    /*--------------*/

    let btn_leaderboard = document.getElementById('btn-leaderboard');
    let leaderboard_modal = document.getElementById('leaderboard-modal');
    let leaderboard_span = document.getElementById('leaderboard-modal-close-span');

    btn_leaderboard.addEventListener('click', function () {
        leaderboard_modal.classList.remove('hidden');
    });
    leaderboard_span.addEventListener('click', function () {
        leaderboard_modal.classList.add('hidden');
    });

    /*---------------*/
    let btn_about = document.getElementById('btn-about');
    let about_modal = document.getElementById('about-modal');
    let about_span = document.getElementById('about-modal-close-span');

    btn_about.addEventListener('click', function () {
        about_modal.classList.remove('hidden');
    });
    about_span.addEventListener('click', function () {
        about_modal.classList.add('hidden');
    });

    /*---------------*/
    let div_login = document.getElementById('div-login');
    let div_signup = document.getElementById('div-signup');
    let btn_to_login = document.getElementById('btn-to-login');
    let btn_to_signup = document.getElementById('btn-to-signup');

    btn_to_login.addEventListener('click', function (event) {
        div_signup.classList.add('hidden');
        div_login.classList.remove('hidden');
    });

    btn_to_signup.addEventListener('click', function (event) {
        div_signup.classList.remove('hidden');
        div_login.classList.add('hidden');
    });
});
