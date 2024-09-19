import { View, Text, Image, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

// Importando a imagem local
const wendelImage = require('../assets/wendel.png');

export default function Home() {
  return (
    <View style={styles.container}>
      <Image 
        source={wendelImage} 
        style={styles.image} 
      />
      <Text style={styles.title}>Sobre Mim</Text>
      <Text style={styles.description}>
        Olá, eu sou Wendel Gabriel Hang, tenho 18 anos. Sou apaixonado por jogos, assistir animes como One Piece, Saga de Dragon Ball, Boku no Hero, Cavaleiros do Zodíaco, entre outros. Também adoro ir à praia e desfrutar de um bom dia ao sol.
      </Text>
      <Link href="/movies" style={styles.link}>
        <Text style={styles.linkText}>Ver Meus Filmes</Text>
      </Link>
      <Link href="/games" style={styles.link}>
        <Text style={styles.linkText}>Ver Meus Games</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f8ff',
    padding: 20,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: '#666',
  },
  link: {
    margin: 10,
    padding: 10,
    backgroundColor: '#4CAF50',
    borderRadius: 10,
  },
  linkText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
