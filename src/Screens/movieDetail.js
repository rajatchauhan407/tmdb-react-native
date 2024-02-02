import React, { useState, useEffect } from "react";
import { Text, Image, View } from "react-native";
import LayoutDetails from "../layout/layoutDetails";
import useFetch from "../hooks/useFetch";
import { keys } from "../config/keys";
import { BaseUrl } from "../config/api";
const MovieDetails = ({ route }) => {
  const { id, title, type } = route.params;
  const [url, setUrl] = useState(`${BaseUrl}/${type}/${id}`);

  const { data, isLoading, error, fetchData } = useFetch(url, "GET", {
    headers: {
      Authorization: `Bearer ${keys.ACCESS_TOKEN}`,
    },
  });
  const [path, setPath] = useState("");
console.log(id, title, type);
  useEffect(() => {
    (async () => {
      await fetchData();
    })();
  }, [url]);

  if (isLoading) {
    return (
      <LayoutDetails headerTitle={title}>
        <Text>Loading...</Text>
      </LayoutDetails>
    );
  }
  if (data) {
    return (
      <LayoutDetails headerTitle={title}>
        <View
          style={{
            display: "flex",
            flex: 1,
            flexDirection: "column",
            width: "100%",
            padding: 40,

          }}
        >
          <Text
            style={{ textAlign: "center", paddingVertical: 20, fontSize: 20 }}
          >
            {data.original_title || data.original_name}
          </Text>
          <View style={{ flex: 1, flexDirection: "row" }}>
            <Image
              source={{
                uri: `https://image.tmdb.org/t/p/original/${data.poster_path}`,
              }}
              style={{ width: "100%", marginHorizontal: "auto" }}
            />
          </View>

          <Text
            style={{ textAlign: "center", paddingVertical: 10, fontSize: 16 }}
          >
            {data.overview}
          </Text>
        </View>
      </LayoutDetails>
    );
  }
};

export default MovieDetails;
