<template>
    <div class=" space-y-16">
        <!-- Section 1: How this works -->
        <div class="flex flex-col md:flex-row items-center gap-4">
            <!-- Content -->
            <div class="md: w-full">
                <div class="bg-teal-700/30 p-6 rounded-lg md:min-h-80">
                    <h3 class="text-xl font-semibold text-amber-400 my-10">How this works for you</h3>
                    <p class="mb-4">
                        BEC Programme measures 90 separate aspects (Verbal and Visual) of your
                        intellect to identify your unique talent and strengths.
                    </p>
                </div>
            </div>

            <!-- Progress Circle (25% fill) -->
            <div class=" mx-20">

                <circle-progress percent="25" size="50" border-width="10" border-bg-width="10" fill-color="#10B981"
                    viewport="true" />
            </div>


            <!-- Image -->
            <div class="md:w-full">

                <img src="/public/rubix.gif" alt="Capabilities cube" class="h-80" />


            </div>
        </div>

        <!-- Section 2: Coaching -->
        <div class="flex flex-col md:flex-row items-center gap-4">
            <!-- Content -->

            <div class="md:w-full">

                <img src="/public/one to one.jpg" alt="Capabilities cube" class=" h-80" />

            </div>
            <!-- Progress Circle (50% fill) -->
            <div class=" mx-20">
                <circle-progress percent="50" size="50" border-width="10" border-bg-width="10" fill-color="#10B981"
                    viewport="true" />
            </div>

            <!-- Image -->

            <div class="md:w-full">
                <div class="bg-teal-700/30 p-6 rounded-lg md:min-h-80">
                    <h3 class="text-xl font-semibold text-amber-400 my-10">One to one coaching with trained mentors</h3>
                    <p class="mb-4">
                        Up to 10 hours with certified psychologists. The suggested pathway
                        is monitored weekly to ensure it is the best one for you.
                    </p>
                </div>
            </div>
        </div>

        <!-- Section 3: Career Path -->
        <div class="flex flex-col md:flex-row items-center gap-4">
            <!-- Content -->
            <div class="md:w-full">
                <div class="bg-teal-700/30 p-6 rounded-lg md:min-h-80">
                    <h3 class="text-xl font-semibold text-amber-400 my-10">Career path matching</h3>
                    <p>
                        We compare your assessment to over 120 career paths to find the best one for you.
                        We can support you into self-employment to optimize your unique talents.
                    </p>
                </div>
            </div>

            <!-- Progress Circle (75% fill) -->
            <div class=" mx-20">
                <circle-progress percent="75" size="50" border-width="10" border-bg-width="10" fill-color="#10B981"
                    viewport="true" />
            </div>

            <!-- Image -->
            <div class="md:w-full">

                <img src="/public/future.jpg" alt="Capabilities cube" class=" h-80" />

            </div>
        </div>
        <!-- Section 4: Support System -->
        <div class="flex flex-col md:flex-row items-center gap-4">
            <!-- Content -->
            <div class="md:w-full">

                <img src="/public/panel.png" alt="Capabilities cube" class=" h-80" />

            </div>

            <!-- Progress Circle (100% fill) -->
            <div class=" mx-20">
                <circle-progress percent="100" size="50" border-width="10" border-bg-width="10" fill-color="#10B981"
                    viewport="true" />
            </div>
            <!-- Image -->

            <div class="md:w-full">
                <div class="bg-teal-700/30 p-6 rounded-lg md:min-h-80">
                    <h3 class="text-xl font-semibold text-amber-400 my-10">Support System & Panel</h3>
                    <p class="mb-4">
                        We collaborate with like-minded organization to achieve the best result tailored to your unique
                        potential. In addition you access to your unique dashboard to consider your progress.
                    </p>
                </div>
            </div>
        </div>
        <div class="text-center mb-12">
            <h1 class="text-4xl font-bold">Unlock your
                <span class="text-amber-400">potential</span> , Achieve your <span class="text-green-400">dreams</span>
            </h1>
        </div>
    </div>
</template>
<script>
import CircleProgress from 'vue3-circle-progress'
export default {
    components: {
        CircleProgress
    }
}
</script>