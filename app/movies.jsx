import { View, Text, Image, StyleSheet } from 'react-native';

// Importando as imagens locais
const movie1Image = require('../assets/movie1.png');
const movie2Image = require('../assets/movie2.png');

export default function Movies() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meus Filmes Favoritos</Text>
      
      <View style={styles.movieContainer}>
        <Image 
          source={movie1Image}
          style={styles.movieImage}
        />
        <Text style={styles.movieTitle}>Filme 1</Text>
        <Text style={styles.movieDescription}>
          Descrição do Filme 1:Eu gosto de Deadpool 3 porque é um filme que mistura comédia irreverente com ação de maneira única. O personagem Deadpool, interpretado por Ryan Reynolds, é conhecido por seu humor sarcástico e quebras da quarta parede, o que torna cada cena divertida e imprevisível. A forma como o filme brinca com as convenções dos filmes de super-heróis e faz referências à cultura pop é refrescante e inovadora.
        </Text>
      </View>

      <View style={styles.movieContainer}>
        <Image 
          source={movie2Image}
          style={styles.movieImage}
        />
        <Text style={styles.movieTitle}>Filme 2</Text>
        <Text style={styles.movieDescription}>
          Descrição do Filme 2: Eu gosto de Velozes e Furiosos: Aventura em Tóquio porque é um filme cheio de ação emocionante e cenas de corrida impressionantes. A trama é rápida e envolvente, com perseguições de alta octanagem e uma cultura de carros que é visualmente deslumbrante. O cenário de Tóquio adiciona um toque exótico e vibrante à franquia, trazendo uma nova dimensão ao universo de Velozes e Furiosos. Além disso, o filme tem uma trilha sonora energética e personagens carismáticos, o que torna a experiência ainda mais divertida e dinâmica.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffe0b2',
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#d32f2f',
  },
  movieContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  movieImage: {
    width: 100,
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  movieTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4e342e',
    marginBottom: 5,
  },
  movieDescription: {
    fontSize: 16,
    color: '#4e342e',
    textAlign: 'center',
    paddingHorizontal: 15,
  },
});
