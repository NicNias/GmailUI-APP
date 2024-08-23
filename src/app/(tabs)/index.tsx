import { FlatList, Text, View } from "react-native";

import { Email } from "@/components/email";
import { Input } from "@/components/input";
import { Avatar } from "@/components/avatar";
import { MenuButton } from "@/components/menu-button";

import { EMAILS } from "@/utils/email";

export default function Home() {
  return (
    <View className="flex-1 bg-gray-900 pt-14 px-4">
      <Input>
        <MenuButton />
        <Input.Field placeholder="Pesquisar no E-mail" />
        <Avatar
          source={{ uri: "https://github.com/NaniasNic.png" }}
          size="small"
        />
      </Input>

      <FlatList
        data={EMAILS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Email data={item} />}
        contentContainerStyle={{ gap: 12, paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => (
          <Text className="uppercase text-gray-400 text-sm font-subtitle mt-6">
            Entrada
          </Text>
        )}
      />
    </View>
  );
}
