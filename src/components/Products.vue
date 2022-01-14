<template>
  <div class="max-w-6xl mx-auto py-10 sm:px-6 lg:px-8">
    <!-- Products tabel -->
    <div class="flex flex-col">
      <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table class="min-w-full divide-y divide-gray-200">
              <!-- T HEAD -->
              <thead class="bg-gray-50">
                <tr>
                  <th scope="col" class="px-6 py-3 font-bold whitespace-nowrap">
                    <span class="inline-flex py-3 px-6">Name</span>
                  </th>

                  <th scope="col" class="px-6 py-3 font-bold whitespace-nowrap">
                    <span class="inline-flex py-3 px-6">Price </span>
                  </th>
                </tr>
              </thead>

              <!-- T BODY -->
              <tbody class="bg-white divide-y divide-gray-200">
                <tr>
                  <td class="p-4 px-6 text-center whitespace-nowrap">
                    <div class="flex flex-col items-center justify-center">
                      <div class="text-sm font-medium text-gray-900 ">
                        product.name
                      </div>
                    </div>
                  </td>

                  <td class="p-4 px-6 text-center whitespace-nowrap">
                    <div class="flex flex-col items-center justify-center">
                      <div class="text-sm font-medium text-gray-900 ">
                        € price
                      </div>
                    </div>
                  </td>

                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup >

</script>

<style>
</style>