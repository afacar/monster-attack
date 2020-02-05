const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 15;

let chosenMaxLife = 100;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;

adjustHealthBars(chosenMaxLife);

function attackHandler() {
  const damage = dealMonsterDamage(ATTACK_VALUE);
  currentMonsterHealth -= damage;
  const damagePlayer = dealPlayerDamage(ATTACK_VALUE)
  currentPlayerHealth -= damagePlayer
}

function strongAttackHandler() {
  const damage = dealMonsterDamage(STRONG_ATTACK_VALUE)
  currentMonsterHealth -= damage;
  const damagePlayer = dealPlayerDamage(STRONG_ATTACK_VALUE)
  currentPlayerHealth -= damagePlayer;
}

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);