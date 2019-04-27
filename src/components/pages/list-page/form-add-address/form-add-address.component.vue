<template>
  <div id="formAddAddress">
     <el-dialog
       title="Add New Address"
       :visible.sync="showForm"
       width="70%">
       <span>
           <div class="form-body-wrapper">
                <el-form :model="formData">
                  <el-form-item>
                      <gmap-autocomplete placeholder="Enter Address" class="el-input__inner" @place_changed="setPlace">
                      </gmap-autocomplete>
                  </el-form-item>
                  <div v-if="place">
                      <el-form-item :rules="rules.street" prop="street">
                           <el-input v-model="forData.street" :disabled="true"></el-input>
                      </el-form-item>
                      <el-form-item :rules="rules.city" prop="city">
                           <el-input v-model="forData.city" :disabled="true"></el-input>
                      </el-form-item>
                      <el-form-item :rules="rules.province" prop="province">
                           <el-input v-model="forData.province" :disabled="true"></el-input>
                      </el-form-item>
                      <el-form-item :rules="rules.postalCode" prop="postalCode">
                           <el-input v-model="forData.postalCode" :disabled="true"></el-input>
                      </el-form-item>
                      <el-form-item :rules="rules.lat" prop="lat">
                           <el-input v-model="forData.lat" :disabled="true"></el-input>
                      </el-form-item>
                      <el-form-item :rules="rules.lng" prop="lng">
                           <el-input v-model="forData.lng" :disabled="true"></el-input>
                      </el-form-item>
                  </div>
                </el-form>
           </div>
       </span>
       <span slot="footer" class="dialog-footer">
          <el-button class="submit-button" @click="submit">Submit</el-button>
       </span>
     </el-dialog>
  </div>
</template>
<script src="./form-add-address.component.js"></script>
<style  src="./form-add-address.component.css"></style>