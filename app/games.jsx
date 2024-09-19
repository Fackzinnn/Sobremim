import { View, Text, Image, StyleSheet } from 'react-native';

// Certifique-se de que os caminhos para as imagens estão corretos
const lolImage = require('../assets/lol.png');
const valorantImage = require('../assets/Valorant.png');
const eldenImage = require('../assets/elden.png');

export default function Games() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meus Games Favoritos</Text>
      
      <View style={styles.gameContainer}>
        <Image 
          source={lolImage}
          style={styles.gameImage}
        />
        <Text style={styles.gameTitle}>League of Legends (LOL)</Text>
        <Text style={styles.gameDescription}>
         
League of Legends é um popular jogo de MOBA onde duas equipes de cinco jogadores competem para destruir a base inimiga. Cada jogador escolhe um campeão com habilidades únicas, e o jogo exige estratégia e trabalho em equipe. Conhecido por sua ação rápida e competitiva, LoL também tem uma forte cena de eSports.


        </Text>
      </View>

      <View style={styles.gameContainer}>
        <Image 
          source={valorantImage}
          style={styles.gameImage}
        />
        <Text style={styles.gameTitle}>Valorant</Text>
        <Text style={styles.gameDescription}>
        Gosto de Valorant pela sua jogabilidade tática e precisa, que combina ação rápida com estratégia. As habilidades únicas dos agentes e o design estratégico das partidas mantêm o jogo emocionante e desafiador.
        </Text>
      </View>

      <View style={styles.gameContainer}>
        <Image 
          source={eldenImage}
          style={styles.gameImage}
        />
        <Text style={styles.gameTitle}>Elden Ring</Text>
        <Text style={styles.gameDescription}>
         
Gosto de Elden Ring pela sua vastidão e profundidade no mundo aberto, que oferece uma exploração rica e desafiadora. A mistura de combate intenso e narrativa envolvente cria uma experiência de RPG verdadeiramente imersiva.
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
  gameContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  gameImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginBottom: 10,
  },
  gameTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4e342e',
    marginBottom: 5,
  },
  gameDescription: {
    fontSize: 16,
    color: '#4e342e',
    textAlign: 'center',
    paddingHorizontal: 15,
  },
});
