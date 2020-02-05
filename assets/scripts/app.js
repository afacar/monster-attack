const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 15;
const HEAL_VALUE = 5;

let chosenMaxLife = 100;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;

adjustHealthBars(chosenMaxLife);

function endRound() {
  const playerDamage = dealPlayerDamage(STRONG_ATTACK_VALUE)
  currentPlayerHealth -= playerDamage;
  if (currentMonsterHealth <= 0) {
    alert('You Win!')
  } else if (currentPlayerHealth <= 0) {
    alert('You loose!')
  }
}

function attackMonster(mode) {
  let damageValue = 0;
  if (mode === 'ATTACK') {
    damageValue = ATTACK_VALUE
  } else if (mode === 'STRONG_ATTACK') {
    damageValue = STRONG_ATTACK_VALUE
  }
  const monsterDamage = dealMonsterDamage(damageValue);
  currentMonsterHealth -= monsterDamage;
  endRound();
}

function attackHandler() {
  attackMonster('ATTACK')
}

function strongAttackHandler() {
  attackMonster('STRONG_ATTACK')
}

function healHandler() {
  let healValue = HEAL_VALUE
  if (currentPlayerHealth >= chosenMaxLife - HEAL_VALUE) {
    alert("You can't heal more than max!")
    healValue = chosenMaxLife - currentPlayerHealth;
  }
  increasePlayerHealth(healValue);
  currentPlayerHealth += healValue;
  endRound();
}

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', healHandler);