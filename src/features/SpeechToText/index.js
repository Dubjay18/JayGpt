// import { Audio } from "expo-av";
// import * as Speech from "expo-speech";
// import React, { useState } from "react";
// import {
//   StyleSheet,
//   Text,
//   View,
//   TouchableOpacity,
// } from "react-native";
// function SpeechToText() {
//   const [transcription, setTranscription] = useState("");

//   async function startRecording() {
//     try {
//       await Audio.requestPermissionsAsync();
//       await Audio.setAudioModeAsync({
//         allowsRecordingIOS: true,
//         playsInSilentModeIOS: true,
//       });
//       console.log(Speech.getAvailableVoicesAsync);
//       const { transcription } =
//         await Speech.getAvailableVoicesAsync({
//           language: "en-US",
//           onResults: (results) => {
//             setTranscription(results[0]);
//           },
//         });
//       console.log(Speech.getAvailableVoicesAsync());
//       setTranscription(transcription);
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   return (
//     <View style={styles.container}>
//       <TouchableOpacity onPress={startRecording}>
//         <Text style={styles.button}>
//           Start Speech-to-Text
//         </Text>
//       </TouchableOpacity>
//       <Text style={styles.text}>{transcription}</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   button: {
//     fontSize: 20,
//     backgroundColor: "blue",
//     color: "#fff",
//     padding: 10,
//     borderRadius: 10,
//     marginBottom: 20,
//   },
//   text: {
//     fontSize: 20,
//     fontWeight: "bold",
//     textAlign: "center",
//     padding: 20,
//   },
// });

// export default SpeechToText;
import React, { useEffect, useState } from "react";
import { View, Text, Button } from "react-native";
import { Audio } from "expo-av";
import axios from "axios";
import CustomToast from "../../utility/toast/CustomToast";
import * as Permissions from "expo-permissions";

const API_URL = "https://asr.api.speechmatics.com/v2";
const API_KEY = "z93vuDxgdsmUAGR6Vtjur04qIkrMJa52";

export default function SpeechToText() {
  const [isRecording, setIsRecording] = useState(false);
  const [audioFile, setAudioFile] = useState(null);
  const [transcript, setTranscript] = useState(null);
  const [recordingPermission, setRecordingPermission] =
    useState(null);

  async function askForPermissions() {
    const { status } = await Permissions.askAsync(
      Permissions.AUDIO_RECORDING
    );
    setRecordingPermission(status);
    if (status !== "granted") {
      throw new Error(
        "Permission not granted for audio recording"
      );
    }
  }

  useEffect(() => {
    askForPermissions();
  }, []);
  async function startRecording() {
    setIsRecording(true);

    const recording = new Audio.Recording();
    await recording.prepareToRecordAsync(
      Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
    );
    await recording.startAsync();

    setAudioFile(recording);
  }

  async function stopRecording() {
    setIsRecording(false);

    if (audioFile) {
      console.log("stop1");
      await audioFile.stopAndUnloadAsync();
      console.log("stop");
      const uri = audioFile.getURI();
      try {
        console.log("stop11");
        transcribeAudio(uri);
        console.log("stop3");
      } catch (error) {
        console.log(error);
      }
    } else {
      CustomToast("failed");
      console.log("failed");
    }
  }

  async function transcribeAudio(uri) {
    const formData = new FormData();
    formData.append("data_file", {
      audio: uri,
      type: "audio/x-wav",
      name: "audio_file",
    });

    axios
      .post(API_URL, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${API_KEY}`,
        },
        params: {
          model: "en-US",
        },
      })
      .then((response) => {
        setTranscript(response.data);
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}>
      <Button
        title={
          isRecording ? "Stop Recording" : "Start Recording"
        }
        onPress={
          isRecording ? stopRecording : startRecording
        }
      />
      {transcript && <Text>{transcript}</Text>}
    </View>
  );
}
