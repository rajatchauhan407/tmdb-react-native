import React from "react";
import { View, Text, Image, Button } from "react-native";
import CustomButton from "../button";

const MovieCard = ({ title,posterPath,popularity,releaseDate,navigation }) => {

    const showMore = () => {
        navigation.navigate('MovieDetails', {
          title
          
        });
    }
  return (
    <View
      style={{
        backgroundColor: "#fff",
        flexDirection: "row",
        margin: 10,
        padding: 10,
        boxShadow: "0 0 10px rgba(0,0,0,0.2)",
      }}
    >
      <Image
        source={{ uri: `https://image.tmdb.org/t/p/w185/${posterPath}` }}
        style={{ width: 90 }}
      />
      <View
        style={{
        flex:1,
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          width:100,
          marginLeft:10
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>{title}</Text>
        <Text style={{ fontSize: 15, fontWeight: "normal" }}>Popularity: {popularity}</Text>
        <Text style={{ fontSize: 15, fontWeight: "normal" }}>Release Date: {releaseDate}</Text>
        <CustomButton title="Show More" onPress={showMore} buttonStyle={{marginTop:5}}/>
      </View>
    </View>
  );
};
export default MovieCard;
