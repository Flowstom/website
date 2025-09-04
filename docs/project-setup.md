---
description: Describes how to set up a Flowstom project.
---

<script setup>
import { ref, onMounted } from 'vue'

const version = ref("<--version-->");

const fetchVersion = async () => {
  try {
    const response = await (await fetch("https://api.github.com/repos/Flowstom/Flowstom/releases/latest")).json();
    const ver = response.tag_name;
    if (ver != null) {
      version.value = ver;
    }
  } catch (error) {
    console.error("Error fetching latest version:", error);
  }
}

onMounted(() => {
  fetchVersion();
});
</script>

# Project Setup

:::alert info
Minestom (and, by extension, Flowstom) needs Java 21 or newer in order to run. If you are using Gradle, you must use version 8.5 or higher.
:::

Adding Flowstom to your Java project is done just like Minestom and is a drop-in replacement for it (as in, you can just replace the dependency while keeping your code the same).

## Repositories

:::tabs
== Gradle (Groovy)

```groovy
repositories {
    mavenCentral()
}
```

== Gradle (Kotlin)

```kotlin
repositories {
    mavenCentral()
}
```

:::

## Dependencies

:::tabs
== Gradle (Groovy)

```groovy-vue
dependencies {
    implementation 'net.flowstom:flowstom:{{ version }}'
}
```

== Gradle (Kotlin)

```kotlin-vue
dependencies {
    implementation("net.flowstom:flowstom:{{version}}")
}
```

== Maven

```xml-vue
<dependencies>
    <!-- ... -->
    <dependency>
        <groupId>net.flowstom</groupId>
        <artifactId>flowstom</artifactId>
        <version>{{version}}</version>
    </dependency>
</dependencies>
```

:::

You can see available versions [here](https://github.com/Flowstom/Flowstom/releases).

PR branches are also published and can be used as per the [instructions](https://discord.com/channels/706185253441634317/706187127854989423/1391579598226984961) in the Minestom Discord server.