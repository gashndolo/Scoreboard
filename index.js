let homeScoreEl = document.getElementById("homeScore")
let homeScore = 0
let awayScoreEl = document.getElementById("awayScore")
let awayScore = 0

function plusHome(score) {
    homeScore += score
    homeScoreEl.textContent = homeScore
}

function plusAway(score) {
    awayScore += score
    awayScoreEl.textContent = awayScore
}

//homeScore.innerHTML = 0