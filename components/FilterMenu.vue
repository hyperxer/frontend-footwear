<template>
  <div class="container content-space-1">
    <div class="row">
      <div class="col-lg-3">
        <!-- Navbar -->
        <div class="navbar-expand-lg mb-5">
          <!-- Navbar Toggle -->
          <div class="d-grid">
            <button type="button" class="navbar-toggler btn btn-white mb-3" data-bs-toggle="collapse" data-bs-target="#navbarVerticalNavMenuEg2" aria-label="Toggle navigation" aria-expanded="false" aria-controls="navbarVerticalNavMenuEg2">
              <span class="d-flex justify-content-between align-items-center">
                <span class="text-dark">Filter</span>
  
                <span class="navbar-toggler-default">
                  <i class="bi-list"></i>
                </span>
  
                <span class="navbar-toggler-toggled">
                  <i class="bi-x"></i>
                </span>
              </span>
            </button>
          </div>
          <!-- End Navbar Toggle -->
  
          <!-- Navbar Collapse -->
          <div id="navbarVerticalNavMenuEg2" class="collapse navbar-collapse">
            <div class="w-100">
              <!-- Form -->
              <form>
                <div class="border-bottom pb-4 mb-4">
                  <h5>Gender</h5>
  
                  <div class="d-grid gap-2">
                    <!-- Checkboxes -->
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="" id="menCheckbox" checked>
                      <label class="form-check-label" for="menCheckbox">Men (73)</label>
                    </div>
                    <!-- End Checkboxes -->
  
                    <!-- Checkboxes -->
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="" id="womenCheckbox" checked>
                      <label class="form-check-label" for="womenCheckbox">Women (51)</label>
                    </div>
                    <!-- End Checkboxes -->
                  </div>
                </div>
  
                <div class="border-bottom pb-4 mb-4">
                  <h5>Brand</h5>
  
                  <div class="d-grid gap-2">
                    <!-- Checkboxes -->
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="" id="adidasCheckbox">
                      <label class="form-check-label" for="adidasCheckbox">Adidas (16)</label>
                    </div>
                    <!-- End Checkboxes -->
  
                    <!-- Checkboxes -->
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="" id="newBalanceCheckbox">
                      <label class="form-check-label" for="newBalanceCheckbox">New Balance (8)</label>
                    </div>
                    <!-- End Checkboxes -->
  
                    <!-- Checkboxes -->
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="" id="nikeCheckbox">
                      <label class="form-check-label" for="nikeCheckbox">Nike (35)</label>
                    </div>
                    <!-- End Checkboxes -->
  
                    <!-- Checkboxes -->
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="" id="fredPerryCheckbox">
                      <label class="form-check-label" for="fredPerryCheckbox">Fred Perry (5)</label>
                    </div>
                    <!-- End Checkboxes -->
  
                    <!-- Checkboxes -->
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="" id="tnfCheckbox">
                      <label class="form-check-label" for="tnfCheckbox">The North Face (1)</label>
                    </div>
                    <!-- End Checkboxes -->
                  </div>
  
                  <!-- View More - Collapse -->
                  <div class="collapse" id="collapseBrand">
                    <div class="d-grid gap-2">
                      <!-- Checkboxes -->
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="gucciCheckbox">
                        <label class="form-check-label" for="gucciCheckbox">Gucci (5)</label>
                      </div>
                      <!-- End Checkboxes -->
  
                      <!-- Checkboxes -->
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="mangoCheckbox">
                        <label class="form-check-label" for="mangoCheckbox">Mango (1)</label>
                      </div>
                      <!-- End Checkboxes -->
                    </div>
                  </div>
                  <!-- End View More - Collapse -->
  
                  <!-- Link -->
                  <a class="link-sm link-collapse" href="#collapseBrand" role="button" data-bs-toggle="collapse" aria-expanded="false" aria-controls="collapseBrand">
                    <span class="link-collapse-default">View more</span>
                    <span class="link-collapse-active">View less</span>
                  </a>
                  <!-- End Link -->
                </div>
  
                <div class="border-bottom pb-4 mb-4">
                  <h5>Size</h5>
  
                  <div class="d-grid gap-2">
                    <!-- Checkboxes -->
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="" id="sizeSCheckbox" checked>
                      <label class="form-check-label" for="sizeSCheckbox">S (27)</label>
                    </div>
                    <!-- End Checkboxes -->
  
                    <!-- Checkboxes -->
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="" id="sizeMCheckbox">
                      <label class="form-check-label" for="sizeMCheckbox">M (18)</label>
                    </div>
                    <!-- End Checkboxes -->
  
                    <!-- Checkboxes -->
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="" id="sizeLCheckbox" checked>
                      <label class="form-check-label" for="sizeLCheckbox">L (0)</label>
                    </div>
                    <!-- End Checkboxes -->
  
                    <!-- Checkboxes -->
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="" id="sizeXLCheckbox">
                      <label class="form-check-label" for="sizeXLCheckbox">XL (1)</label>
                    </div>
                    <!-- End Checkboxes -->
  
                    <!-- Checkboxes -->
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="" id="sizeXXLCheckbox">
                      <label class="form-check-label" for="sizeXXLCheckbox">XXL (2)</label>
                    </div>
                    <!-- End Checkboxes -->
                  </div>
                </div>
  
                <div class="border-bottom pb-4 mb-4">
                  <h5>Category</h5>
  
                  <div class="d-grid gap-2">
                    <!-- Checkboxes -->
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="" id="tshirtCheckbox" checked>
                      <label class="form-check-label" for="tshirtCheckbox">T-shirt (73)</label>
                    </div>
                    <!-- End Checkboxes -->
  
                    <!-- Checkboxes -->
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="" id="shoesCheckbox">
                      <label class="form-check-label" for="shoesCheckbox">Shoes (0)</label>
                    </div>
                    <!-- End Checkboxes -->
  
                    <!-- Checkboxes -->
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="" id="accessoriesCheckbox" checked>
                      <label class="form-check-label" for="accessoriesCheckbox">Accessories (51)</label>
                    </div>
                    <!-- End Checkboxes -->
  
                    <!-- Checkboxes -->
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="" id="topsCheckbox" checked>
                      <label class="form-check-label" for="topsCheckbox">Tops (5)</label>
                    </div>
                    <!-- End Checkboxes -->
  
                    <!-- Checkboxes -->
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="" id="bottomCheckbox">
                      <label class="form-check-label" for="bottomCheckbox">Bottom (11)</label>
                    </div>
                    <!-- End Checkboxes -->
                  </div>
  
                  <!-- View More - Collapse -->
                  <div class="collapse" id="collapseCategory">
                    <div class="d-grid gap-2">
                      <!-- Checkboxes -->
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="shortsCheckbox">
                        <label class="form-check-label" for="shortsCheckbox">Shorts (6)</label>
                      </div>
                      <!-- End Checkboxes -->
  
                      <!-- Checkboxes -->
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="hatsCheckbox">
                        <label class="form-check-label" for="hatsCheckbox">Hats (3)</label>
                      </div>
                      <!-- End Checkboxes -->
  
                      <!-- Checkboxes -->
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="socksCheckbox">
                        <label class="form-check-label" for="socksCheckbox">Socks (8)</label>
                      </div>
                      <!-- End Checkboxes -->
                    </div>
                  </div>
                  <!-- End View More - Collapse -->
  
                  <!-- Link -->
                  <a class="link-sm link-collapse" href="#collapseCategory" role="button" data-bs-toggle="collapse" aria-expanded="false" aria-controls="collapseCategory">
                    <span class="link-collapse-default">View more</span>
                    <span class="link-collapse-active">View less</span>
                  </a>
                  <!-- End Link -->
                </div>
  
                
  
                <div class="d-grid">
                  <button type="button" class="btn btn-white btn-transition">Clear all</button>
                </div>
              </form>
              <!-- End Form -->
            </div>
          </div>
          <!-- End Navbar Collapse -->
        </div>
        <!-- End Navbar -->
      </div>
      <!-- End Col -->
    </div>
    <!-- End Row -->
  </div>
  </template>
  
  <script>
    
  </script>
  
  <style scoped>
  </style>
  