package org.mockito.internal.creation.cglib;

import java.lang.reflect.Field;

import net.sf.cglib.proxy.MethodProxy;

public class CGLIBHacker {

    public void setMockitoNamingPolicy(MethodProxy methodProxy) {
        try {
            Field createInfoField = methodProxy.getClass().getDeclaredField("createInfo");
            createInfoField.setAccessible(true);
            Object createInfo = createInfoField.get(methodProxy);
            Field namingPolicyField = createInfo.getClass().getDeclaredField("namingPolicy");
            namingPolicyField.setAccessible(true);
            if (namingPolicyField.get(createInfo) == null) {
                namingPolicyField.set(createInfo, MockitoNamingPolicy.INSTANCE);
            }
        } catch (Exception e) {
            throw new RuntimeException("Unable to set MockitoNamingPolicy on cglib generator which creates FastClasses", e);
        }
    }
}