<script setup lang="ts">
import { resume } from '~/content/resume.ts'
</script>

<template>
  <UApp>
    <UContainer
      as="main"
      role="main"
      class="space-y-8 py-8 md:py-10 max-w-4xl"
    >
      <header class="flex flex-wrap-reverse md:flex-nowrap justify-between gap-y-(--space-2xs-xs) gap-x-(--space-2xl-3xl)">
        <div>
          <h1>
            {{ resume.name }}
          </h1>
          <p class="text-lg">
            {{ resume.about }}
          </p>
          <p>
            <UTooltip :text="resume.location.ariaDescribedBy">
              <ULink
                :href="resume.location.href"
                target="_blank"
                :aria-label="resume.location.ariaLabel"
                class="hover:underline"
              >{{ resume.location.text }}
              </ULink>
            </UTooltip>
          </p>
          <address class="mt-2 md:mt-3">
            <UButtonGroup
              as="ul"
              class="space-x-1"
            >
              <ContactEntry
                v-for="(entry, index) in resume.contacts"
                :key="index"
                v-bind="entry"
              />
            </UButtonGroup>
          </address>
        </div>
        <UAvatar
          :src="resume.avatarUrl"
          :alt="`Portrait of ${resume.name}`"
          icon="i-lucide-image"
          class="size-(--square-64-144)"
          sizes="64px sm:80px md:96px lg:112px xl:128px xxl:144px"
          format="avif,webp,jpeg,jpg,png"
        />
      </header>

      <section id="about">
        <h2>
          About
        </h2>
        <p>
          {{ resume.summary }}
        </p>
      </section>

      <section id="work-experience">
        <h2>
          Work Experience
        </h2>
        <div class="space-y-4">
          <WorkEntry
            v-for="(entry, index) in resume.work"
            :key="index"
            v-bind="entry"
          />
        </div>
      </section>

      <section id="education">
        <h2>
          Education
        </h2>
        <div class="space-y-4">
          <EducationEntry
            v-for="(entry, index) in resume.education"
            :key="index"
            v-bind="entry"
          />
        </div>
      </section>

      <section id="skills">
        <h2>
          Skills
        </h2>
        <ul
          class="flex flex-wrap gap-(--space-3xs-2xs)"
        >
          <li
            v-for="(skill, index) in resume.skills"
            :key="index"
          >
            <UBadge
              color="neutral"
              variant="subtle"
              size="lg"
            >
              {{ skill }}
            </UBadge>
          </li>
        </ul>
      </section>

      <section id="projects">
        <h2>
          Projects
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-(--space-xs-s)">
          <ProjectEntry
            v-for="(entry, index) in resume.projects"
            :key="index"
            v-bind="entry"
          />
        </div>
      </section>
    </UContainer>
  </UApp>
</template>
