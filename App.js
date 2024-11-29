import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View, Modal } from "react-native";
import { useState } from "react";
import DatePicker from "react-native-modern-datepicker";
import { getToday, getFormatedDate } from "react-native-modern-datepicker";
export default function App() {
  const today = new Date();
  const startDate = getFormatedDate(
    today.setDate(today.getDate() + 1),
    "YYYY/MM/DD"
  );

  const [open, setOpen] = useState(false); // Modal açıp kapama kontrolü
  const [date, setDate] = useState("2024-11-29"); // Başlangıç tarihi (geçerli bir tarih formatı)

  function handleonPress() {
    setOpen(!open);
  }

  function handleChange(selectedDate) {
    setDate(selectedDate); // Tarih değiştiğinde set et
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleonPress}>
        <Text>Open Modal</Text>
      </TouchableOpacity>

      <Modal animationType="slide" transparent={true} visible={open}>
        <View style={styles.centeredView}>
          <View style={styles.ModalView}>
            <TouchableOpacity onPress={handleonPress}>
              <Text>Close Modal</Text>
            </TouchableOpacity>
            <DatePicker
              mode="calendar"
              selected={date}
              minimumDate={startDate}
              onDateChange={handleChange} // Date değişince handleChange çağrılır
            />
          </View>
        </View>
      </Modal>

      <StatusBar style="auto" />
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
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  ModalView: {
    margin: 20,
    backgroundColor: "white",
    width: "90%",
    borderRadius: 20,
    padding: 35,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
