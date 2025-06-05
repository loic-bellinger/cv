import { describe, it, expect, beforeEach } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import { h } from 'vue'
import { UApp, UTooltip, UButton, ContactEntry } from '#components'
import type { Contact } from '~/types/resume'

describe('ContactEntry.vue', () => {
  let wrapper: ReturnType<typeof mountSuspended>
  let contactEntry: ReturnType<typeof wrapper.getComponent>
  const contact: Contact = {
    ariaLabel: 'contact.email',
    ariaDescribedBy: 'tooltip.email',
    href: 'mailto:test@example.com',
    icon: 'lucide:mail'
  }

  beforeEach(async () => {
    wrapper = await mountSuspended(UApp, {
      slots: {
        default: () => h(ContactEntry, { ...contact })
      },
      global: {
        mocks: {
          $rt: (key: string) => `TRANSLATED:${key}`
        }
      }
    })

    contactEntry = wrapper.getComponent(ContactEntry)
  })

  it('renders a top-level <li> element', () => {
    expect(contactEntry.element.tagName).toBe('LI')
  })

  it('passes the correct translated text to UTooltip', () => {
    const tooltip = contactEntry.getComponent(UTooltip)
    expect(tooltip.props('text')).toBe(`TRANSLATED:${contact.ariaDescribedBy}`)
  })

  it('renders a UButton with correct props and link attributes', () => {
    const tooltip = contactEntry.getComponent(UTooltip)
    const button = tooltip.getComponent(UButton)

    expect(button.props('href')).toBe(contact.href)
    expect(button.props('icon')).toBe(contact.icon)

    const link = button.get('a')
    expect(link.attributes('aria-label')).toBe(`TRANSLATED:${contact.ariaLabel}`)
  })
})
