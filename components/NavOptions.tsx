import React from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import { NavData } from "../types";
import tw from "tailwind-react-native-classnames";
import { Icon } from "react-native-elements/dist/icons/Icon";
import { useNavigation } from "@react-navigation/core";

const data: NavData[] = [
  {
    id: "123",
    title: "Get a ride",
    image: "https://links.papareact.com/3pn",
    screen: "MapScreen",
  },
  {
    id: "456",
    title: "Order food",
    image: "https://links.papareact.com/28w",
    screen: "EatScreen",
  },
];

const NavOptions = () => {
  const navigation = useNavigation();

  return (
    <View>
      <FlatList
        keyExtractor={(item) => item.id}
        data={data}
        horizontal
        renderItem={({ item }) => (
          <TouchableOpacity
            style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}
            // @ts-ignore
            onPress={() => navigation.navigate(item.screen)}
          >
            <View>
              <Image
                source={{ uri: item.image }}
                style={{
                  resizeMode: "contain",
                  width: 120,
                  height: 120,
                }}
              />
              <Text style={tw`font-semibold text-lg mt-2`}>{item.title}</Text>
              <Icon
                style={tw`rounded-full bg-black p-2 w-10 mt-4`}
                name="arrowright"
                type="antdesign"
                color="white"
              />
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default NavOptions;
