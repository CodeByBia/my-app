import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 30,
    backgroundColor: '#f2f2f2',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  wordContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 20,
  },
  letter: {
    fontSize: 32,
    marginHorizontal: 6,
    color: '#222',
    fontWeight: 'bold',
    borderBottomWidth: 2,
    borderBottomColor: '#888',
    minWidth: 28,
    textAlign: 'center',
  },
  attempts: {
    fontSize: 18,
    color: '#555',
    marginBottom: 10,
  },
  keyboardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginVertical: 10,
    maxWidth: 340,
  },
  key: {
    width: 32,
    height: 38,
    margin: 3,
    borderRadius: 6,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#bbb',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
  },
  keyDisabled: {
    backgroundColor: '#eee',
    borderColor: '#ddd',
  },
  keyCorrect: {
    backgroundColor: '#c8e6c9',
    borderColor: '#388e3c',
  },
  keyWrong: {
    backgroundColor: '#ffcdd2',
    borderColor: '#d32f2f',
  },
  keyText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  guessedContainer: {
    marginTop: 10,
    alignItems: 'center',
  },
  guessedTitle: {
    fontSize: 16,
    color: '#333',
    fontWeight: 'bold',
  },
  guessedList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 4,
    justifyContent: 'center',
  },
  guessedLetter: {
    fontSize: 18,
    marginHorizontal: 3,
    fontWeight: 'bold',
    padding: 2,
    borderRadius: 4,
    minWidth: 22,
    textAlign: 'center',
  },
  guessedCorrect: {
    backgroundColor: '#c8e6c9',
    color: '#388e3c',
  },
  guessedWrong: {
    backgroundColor: '#ffcdd2',
    color: '#d32f2f',
  },
  resultContainer: {
    marginTop: 18,
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 2,
  },
  resultText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 6,
  },
  resultWord: {
    fontSize: 20,
    color: '#555',
    fontWeight: 'bold',
  },
  restartButton: {
    marginTop: 22,
    backgroundColor: '#1976d2',
    paddingHorizontal: 28,
    paddingVertical: 10,
    borderRadius: 8,
    elevation: 2,
  },
  restartText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
});

export default styles;
