<script>
  import { Box, Stack } from "../src/components/index.js";
  import PageHeader from "./components/PageHeader.svelte";
</script>

<PageHeader title="Box" desc="A fundemental structural component, which comes in four modes." />

<Stack>

## Modes

  <Stack>
    <Box mode="white">white</Box>
    <Box mode="light">light</Box>
    <Box mode="dark">dark</Box>
    <Box mode="black">black</Box>
  </Stack>

## Spacing

  <Stack>
    <Box mode="light" space="1">Space 1</Box>
    <Box mode="light" space="2">Space 2</Box>
    <Box mode="light" space="3">Space 3</Box>
    <Box mode="light" space="4">Space 4</Box>
    <Box mode="light" space="5">Space 5</Box>
    <Box mode="light" space="6">Space 6</Box>
    <Box mode="light" space="7">Space 7</Box>
  </Stack>

## Radii

  <Stack>
    <Box mode="light" radius="1">Radius 1</Box>
    <Box mode="light" radius="2">Radius 2</Box>
    <Box mode="light" radius="3">Radius 3</Box>
    <Box mode="light" radius="4">Radius 4</Box>
  </Stack>

## Shadow

  <Stack>
    <Box background="white" shadow="1">Shadow 1</Box>
    <Box background="white" shadow="2">Shadow 2</Box>
    <Box background="white" shadow="3">Shadow 3</Box>
    <Box background="white" shadow="4">Shadow 4</Box>
  </Stack>
</Stack>
