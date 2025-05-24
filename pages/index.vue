<template>
  <UApp>
    <header class="bg-default/75 backdrop-blur border-b border-default h-(--ui-header-height) sticky top-0 z-50">
      <div class="w-full max-w-(--ui-container) mx-auto flex items-center justify-between h-full">
        <div class="ml-auto">
          <ColorModeSelect />
        </div>
      </div>
    </header>
    <UContainer
      as="main"
      role="main"
      class="w-full mx-auto px-4 sm:px-6 lg:px-8 space-y-8 py-8 md:py-10 max-w-4xl"
    >
      <section
        id="intro"
        class="flex flex-wrap-reverse md:flex-nowrap justify-between gap-y-(--space-2xs-xs) gap-x-(--space-2xl-3xl)"
      >
        <div>
          <h1>
            {{ $t('name') }}
          </h1>
          <p class="text-lg">
            {{ $t('about') }}
          </p>
          <p>
            <UTooltip :text="$t('location.ariaDescribedBy')">
              <ULink
                :href="$t('location.href')"
                target="_blank"
                :aria-label="$t('location.ariaLabel')"
                class="hover:underline"
              >{{ $t('location.text') }}
              </ULink>
            </UTooltip>
          </p>
          <address class="mt-2 md:mt-3">
            <UButtonGroup
              as="ul"
              class="space-x-1"
            >
              <ContactEntry
                v-for="(entry, index) in $tm('contacts')"
                :key="index"
                v-bind="entry"
              />
            </UButtonGroup>
          </address>
        </div>
        <UAvatar
          :src="$t('avatarUrl')"
          :alt="`Portrait of ${$t('name')}`"
          icon="i-lucide-image"
          :ui="{ root: 'rounded-[10px] size-(--square-64-144)' }"
          sizes="64px sm:80px md:96px lg:112px xl:128px xxl:144px"
          format="avif,webp,jpeg,jpg,png"
        />
      </section>

      <section id="about">
        <h2>About</h2>
        <p>
          {{ $t('summary') }}
        </p>
      </section>

      <section id="work-experience">
        <h2>Work Experience</h2>
        <div class="space-y-4">
          <WorkEntry
            v-for="(entry, index) in $tm('work')"
            :key="index"
            v-bind="entry"
          />
        </div>
      </section>

      <section id="education">
        <h2>Education</h2>
        <div class="space-y-4">
          <EducationEntry
            v-for="(entry, index) in $tm('education')"
            :key="index"
            v-bind="entry"
          />
        </div>
      </section>

      <section id="skills">
        <h2>Skills</h2>
        <ul
          class="flex flex-wrap gap-(--space-3xs-2xs)"
        >
          <li
            v-for="(skill, index) in $tm('skills')"
            :key="index"
          >
            <UBadge
              color="neutral"
              variant="subtle"
              size="lg"
            >
              {{ $rt(skill) }}
            </UBadge>
          </li>
        </ul>
      </section>

      <section id="projects">
        <h2>Projects</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-(--space-xs-s)">
          <ProjectEntry
            v-for="(entry, index) in $tm('projects')"
            :key="index"
            v-bind="entry"
          />
        </div>
      </section>
    </UContainer>
  </UApp>
</template>
