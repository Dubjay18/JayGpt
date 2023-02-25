import { Audio } from "expo-av";
import * as Speech from "expo-speech";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
function SpeechToText() {
  const [transcription, setTranscription] = useState("");

  async function startRecording() {
    try {
      await Audio.requestPermissionsAsync();
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });
      console.log(Speech.getAvailableVoicesAsync);
      const { transcription } =
        await Speech.getAvailableVoicesAsync({
          language: "en-US",
          onResults: (results) => {
            setTranscription(results[0]);
          },
        });
      console.log(Speech.getAvailableVoicesAsync());
      setTranscription(transcription);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={startRecording}>
        <Text style={styles.button}>
          Start Speech-to-Text
        </Text>
      </TouchableOpacity>
      <Text style={styles.text}>{transcription}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    fontSize: 20,
    backgroundColor: "blue",
    color: "#fff",
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    padding: 20,
  },
});

export default SpeechToText;
