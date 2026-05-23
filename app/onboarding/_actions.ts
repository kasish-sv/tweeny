'use server'

import { auth, clerkClient } from '@clerk/nextjs/server'

export const completeOnboarding = async (formData: FormData) => {
  const { isAuthenticated, userId } = await auth()

  if (!isAuthenticated) {
    return { message: 'No signed-in user' }
  }

  const client = await clerkClient()

  try {
    await client.users.updateUser(userId, {
      privateMetadata: {
        aadhar: formData.get('aadhar'),
        address: formData.get('address'),
      },
      publicMetadata: {
        onboardingComplete: true,
        role: formData.get('role'),
      },
    })
    return { message: 'success' }
  } catch (err) {
    return { error: 'There was an error updating the user metadata.' }
  }
}