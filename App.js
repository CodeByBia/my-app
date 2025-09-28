import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import styles from './styles/mainStyles';

// lista de palavras simples em portugues
const WORDS = [
  'CASA', 'BOLA', 'GATO', 'CARRO', 'FELIZ', 'LIVRO', 'AMIGO', 'SOL', 'LUZ', 'FLORES',
  'VERDE', 'AZUL', 'RIO', 'PATO', 'SAPO', 'PEIXE', 'FESTA', 'DENTE', 'LEITE', 'PAO',
  'FOME', 'SONO', 'NOITE', 'DIA', 'FORCA', 'SAPATO', 'BANANA', 'CAMA', 'RATO', 'VIDA'
];

// letras do alfabeto
const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const MAX_ATTEMPTS = 6;

// retorna uma palavra aleatoria da lista
function getRandomWord() {
  return WORDS[Math.floor(Math.random() * WORDS.length)];
}


export default function App() {
  // estado principal do jogo
  const [word, setWord] = useState(getRandomWord()); // palavra sorteada
  const [guessed, setGuessed] = useState([]); // letras que o usuario tentou
  const [attemptsLeft, setAttemptsLeft] = useState(MAX_ATTEMPTS); // tentativas restantes
  const [gameStatus, setGameStatus] = useState('playing'); // status do jogo

  // verifica se o usuario ganhou ou perdeu
  useEffect(() => {
    const allGuessed = word.split('').every(l => guessed.includes(l));
    if (allGuessed) {
      setGameStatus('won');
    } else if (attemptsLeft <= 0) {
      setGameStatus('lost');
    }
  }, [guessed, attemptsLeft, word]);

  // trata o clique em uma letra
  function handleLetter(letter) {
    if (gameStatus !== 'playing') return;
    if (guessed.includes(letter)) return;
    setGuessed([...guessed, letter]);
    if (!word.includes(letter)) {
      setAttemptsLeft(attemptsLeft - 1);
    }
  }

  // reinicia o jogo
  function handleRestart() {
    setWord(getRandomWord());
    setGuessed([]);
    setAttemptsLeft(MAX_ATTEMPTS);
    setGameStatus('playing');
  }

  // exibe a palavra com underlines para letras nao descobertas
  function renderWord() {
    return word.split('').map((l, idx) => (
      <Text key={idx} style={styles.letter}>
        {guessed.includes(l) || gameStatus !== 'playing' ? l : '_'}
      </Text>
    ));
  }

  // renderiza a interface principal do jogo
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />
      <View style={styles.container}>
        {/* titulo do jogo */}
        <Text style={styles.title}>jogo da forca</Text>

        {/* palavra oculta */}
        <View style={styles.wordContainer}>{renderWord()}</View>

        {/* tentativas restantes */}
        <Text style={styles.attempts}>tentativas restantes: {attemptsLeft}</Text>

        {/* teclado virtual */}
        <View style={styles.keyboardContainer}>
          {ALPHABET.map((letter) => {
            const disabled = guessed.includes(letter) || gameStatus !== 'playing';
            return (
              <TouchableOpacity
                key={letter}
                style={[styles.key, disabled && styles.keyDisabled]}
                onPress={() => handleLetter(letter)}
                disabled={disabled}
              >
                <Text style={styles.keyText}>{letter}</Text>
              </TouchableOpacity>
            );
          })}
        </View>

        {/* letras ja tentadas */}
        <Text style={styles.guessedTitle}>letras ja tentadas:</Text>
        <View style={styles.guessedList}>
          {guessed.map((l, idx) => (
            <Text
              key={idx}
              style={[styles.guessedLetter, word.includes(l) ? styles.guessedCorrect : styles.guessedWrong]}
            >
              {l}
            </Text>
          ))}
        </View>

        {/* mensagem de vitoria ou derrota */}
        {gameStatus === 'won' && (
          <Text style={styles.resultText}>parabens! voce acertou! palavra: {word}</Text>
        )}
        {gameStatus === 'lost' && (
          <Text style={styles.resultText}>que pena! voce perdeu. palavra: {word}</Text>
        )}

        {/* botao para reiniciar o jogo */}
        <TouchableOpacity style={styles.restartButton} onPress={handleRestart}>
          <Text style={styles.restartText}>reiniciar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
