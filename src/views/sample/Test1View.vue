<template>
  <v-app>
    <v-app-bar app color="white" flat>
      <v-container class="py-0 fill-height">
        <v-responsive max-width="260">
          <v-text-field
            dense
            flat
            hide-details
            rounded
            solo-inverted
          ></v-text-field>
        </v-responsive>
        <v-spacer></v-spacer>
      </v-container>
    </v-app-bar>
    <v-main class="grey lighten-3">
      <v-container>
        <v-row>
          <v-col cols="12" sm="2">
            <div style="position: sticky; top: 76px">
              <v-sheet rounded="lg" min-height="268">
                <!-- should be fixed -->d
              </v-sheet>
            </div>
          </v-col>

          <v-col cols="12" sm="8">
            <!-- Scrollable  -->
            <v-sheet rounded="lg" min-height="268"></v-sheet>
            <v-sheet rounded="lg" min-height="268"></v-sheet>
            <v-sheet rounded="lg" min-height="268"></v-sheet>
            <v-sheet rounded="lg" min-height="268"></v-sheet>
            <v-sheet rounded="lg" min-height="268"></v-sheet>
            <v-sheet rounded="lg" min-height="268"></v-sheet>
            <v-sheet rounded="lg" min-height="268"></v-sheet>
          </v-col>

          <v-col cols="12" sm="2">
            <v-sheet rounded="lg" min-height="268">
              <!-- should be fixed  -->fff
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'ReviewItem'
}
</script>