import React from "react";
import { Text, StyleSheet, TextInput, View, Keyboard, Button, TouchableOpacity } from "react-native";
import { Feather, Entypo } from "@expo/vector-icons";

const SearchButton = ({ setSubmitQuery, setClicked, searchPhrase }) => (
    <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {
          Keyboard.dismiss();
          setClicked(false);
          if (searchPhrase!==""){
            setSubmitQuery(true);
          }
        }}
        style={
          searchPhrase===""?
          styles.cancelButton
          : styles.searchButton}
    >
        <Text style={styles.searchButtonText}>
          {searchPhrase===""? "cancel" : "search"}</Text>
    </TouchableOpacity>
);

const SearchBar = ({clicked, searchPhrase, setSearchPhrase, setClicked, setSubmitQuery}) => {
  return (
    <View style={styles.container}>
      <View
        style={
          clicked
            ? styles.searchBar__clicked
            : styles.searchBar__unclicked
        }
      >
        {/* search Icon */}
        <Feather
          name="search"
          size={20}
          color="black"
          style={{ marginLeft: 1 }}
        />
        {/* Input field */}
        <TextInput
          style={styles.input}
          placeholder="Search"
          value={searchPhrase}
          onChangeText={setSearchPhrase}
          onFocus={() => {
            setClicked(true);
          }}
          onBlur={() => {
            setClicked(false);
            Keyboard.dismiss();
          }}
        />
        {/* cross Icon, depending on whether the search bar is clicked or not */}
        {clicked && (
          <Entypo name="cross" size={20} color="black" style={{ padding: 1 }} onPress={() => {
                      setSearchPhrase("");
                  } } />

        )}
      </View>
      {/* search button, depending on whether the search bar is clicked or not */}
      {clicked && (
        <View>
            <SearchButton setClicked={setClicked} setSubmitQuery={setSubmitQuery} searchPhrase={searchPhrase} />
        </View>
      )}
    </View>
);
};
export default SearchBar;

// styles
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    marginVertical: 5,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    width: "90%",

  },
  searchBar__unclicked: {
    padding: 10,
    flexDirection: "row",
    width: "95%",
    backgroundColor: "#d9dbda",
    borderRadius: 15,
    alignItems: "center",
  },
  searchBar__clicked: {
    padding: 10,
    flexDirection: "row",
    width: "80%",
    backgroundColor: "#d9dbda",
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  input: {
    fontSize: 20,
    marginLeft: 10,
    width: "90%",
  },
  searchButton: {
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    backgroundColor: "#4FD15F",
    padding: 10,
  },
  cancelButton: {
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    backgroundColor: "#E95824",
    padding: 10,
  },
  searchButtonText: {
    fontSize: 20,
  },
});