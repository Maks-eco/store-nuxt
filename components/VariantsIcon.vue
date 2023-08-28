<script setup lang="ts">
import { ConfProducts, variantState, ProductFeature } from "~/types";
const emit = defineEmits(["updateImage", "variantSelected"]);
const props = defineProps<{
  item: ConfProducts;
}>();
interface Variant {
  code: string;
  value_index: number;
}

const possibleVariantList = ref([] as Variant[]);

const findImageForFinalVariant = () => {
  if (
    props.item.current_attributes &&
    props.item?.current_attributes.length === 2
  ) {
    const firstVar = props.item?.current_attributes[0];
    const secondVar = props.item?.current_attributes[1];
    props.item.variants?.forEach((variant) => {
      let matchCount = 0;
      variant.attributes.forEach((attr) => {
        if (
          attr.value_index === firstVar.value_index ||
          attr.value_index === secondVar.value_index
        ) {
          matchCount++;
        }
      });
      if (matchCount === 2) {
        let attrArray = [firstVar.value_index, secondVar.value_index];
        attrArray.sort((a, b) => a - b);
        const productFeature: ProductFeature = {
          ...variant.product,
          attrIndexes: attrArray,
        };
        emit("updateImage", productFeature);
        emit("variantSelected", true);
      }
    });
  }
};

const updateStateAttributes = () => {
  if (props.item?.current_attributes) {
    //if form is empty
    if (props.item?.current_attributes.length === 0) {
      props.item.configurable_options?.forEach((item) => {
        item.values.forEach((variant) => {
          variant.state = variantState.Unchecked;
        });
      });
      emit("variantSelected", false);
      return;
    }
    // if only one attribute is selected
    if (props.item?.current_attributes.length === 1) {
      const checkedVar = props.item?.current_attributes[0];
      props.item.configurable_options?.forEach((item) => {
        if (item.attribute_code === checkedVar.code) {
          item.values.forEach((variant) => {
            if (variant.value_index === checkedVar.value_index) {
              variant.state = variantState.Checked;
              return;
            }
            variant.state = variantState.Unchecked;
          });
        }
        if (item.attribute_code !== checkedVar.code) {
          item.values.forEach((variant) => {
            possibleVariantList.value.forEach((possibleVariant) => {
              variant.state = variantState.Inactive;
              if (possibleVariant.value_index === variant.value_index) {
                variant.state = variantState.Unchecked;
              }
            });
          });
        }
      });
      emit("variantSelected", false);
      return;
    }
    // if form is fullfilled
    if (props.item?.current_attributes.length === 2) {
      const firstVar = props.item?.current_attributes[0].value_index;
      const secondVar = props.item?.current_attributes[1].value_index;
      props.item.configurable_options?.forEach((item) => {
        item.values.forEach((variant) => {
          if (
            variant.value_index === firstVar ||
            variant.value_index === secondVar
          ) {
            variant.state = variantState.Checked;
            return;
          }
          variant.state = variantState.Hidden;
        });
      });
      findImageForFinalVariant();
      return;
    }
  }
};

const findPossibleAttributes = () => {
  if (
    props.item?.current_attributes &&
    props.item?.current_attributes.length === 1
  ) {
    const searchedAttr = props.item?.current_attributes[0];
    const variantList: (typeof searchedAttr)[] = [];

    props.item.variants?.forEach((item) => {
      const othersAttrInVariant = item.attributes.filter(
        (attr) => attr.value_index !== searchedAttr.value_index
      );
      if (othersAttrInVariant.length === 1) {
        variantList.push(othersAttrInVariant[0]);
      }
    });

    possibleVariantList.value = [...variantList];
  } else {
    possibleVariantList.value = [];
  }
  updateStateAttributes();
};

const collectCurrentAttributes = (attribute_code: string, index: number) => {
  if (!props.item?.current_attributes) {
    props.item.current_attributes = [];
  }

  const indexAttr: number = props.item.current_attributes.findIndex(
    (item) => item.code === attribute_code
  );
  if (indexAttr >= 0) {
    if (props.item.current_attributes[indexAttr].value_index === index) {
      props.item.current_attributes = props.item.current_attributes.filter(
        (item) => item.code !== attribute_code
      );

      findPossibleAttributes();
      return;
    }
    props.item.current_attributes[indexAttr] = {
      code: attribute_code,
      value_index: index,
    };
  } else {
    props.item.current_attributes.push({
      code: attribute_code,
      value_index: index,
    });
  }

  findPossibleAttributes();
};
onMounted(() => {
  updateStateAttributes();
});
</script>

<template>
  <div v-if="item.type === 'configurable'" class="attr-container">
    <div class="variant-line" v-for="lineRow in item.configurable_options">
      <p class="line-label">{{ lineRow.label }}</p>
      <div v-for="opt in lineRow.values">
        <div
          :class="[
            'var',
            {
              'var-checked': opt.state === variantState.Checked,
              'var-unchecked': opt.state === variantState.Unchecked,
              'var-inactive': opt.state === variantState.Inactive,
              'var-hidden': opt.state === variantState.Hidden,
              'var-inactive-line': opt.state === variantState.Inactive,
            },
          ]"
          :style="{
            backgroundColor:
              lineRow.attribute_code === 'color' ? opt.value : 'gray',
          }"
          @click="
            if (
              opt.state !== variantState.Inactive &&
              opt.state !== variantState.Hidden
            ) {
              collectCurrentAttributes(lineRow.attribute_code, opt.value_index);
            }
          "
        >
          <p>{{ lineRow.attribute_code !== "color" ? opt.label : "" }}</p>
        </div>
      </div>
    </div>
  </div>
  <div v-if="item.type !== 'configurable'" class="attr-container"></div>
</template>

<style lang="scss" scoped>
.variant-line {
  width: 160px;
  height: 22px;

  display: inline-grid;
  grid-template-columns: repeat(5, 1fr);
  align-items: center;
  justify-items: center;
}
.var {
  display: flex;

  align-items: center;
  justify-content: center;
  height: 16px;
  width: 26px;
  background-color: #777;

  font-size: 0.65rem;
  font-weight: bold;
  color: #fff;
}
.var-active {
  outline: 2px solid $active-color;
}

.var-inactive-line {
  background: linear-gradient(
    to bottom right,
    #ffffff00 calc(50% - 1px),
    #f00,
    #ffffff00 calc(50% + 1px)
  );
}
.attr-container {
  height: 44px;
  margin-top: 10px;
  margin-left: 20px;
}

.line-label {
  font-size: 0.8rem;
}
.var-checked {
  outline: 2px solid $active-color;
}
.var-unchecked {
}
.var-inactive {
  opacity: 0.2;
}
.var-hidden {
  opacity: 0.2;
}
</style>
