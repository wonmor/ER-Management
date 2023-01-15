const Priority = () => {
    return (
        <FlatList
            contentContainerStyle={styles.listContent}
            data={patients}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
                <TouchableOpacity onPress={() => {
                  
                }} style={styles.listButton} activeOpacity={0.8}>
                    <Text style={[{fontFamily: 'Outfit_600SemiBold'}, styles.listTextTitle]}>{item}</Text>
                </TouchableOpacity>
            )}
        />
    );
}