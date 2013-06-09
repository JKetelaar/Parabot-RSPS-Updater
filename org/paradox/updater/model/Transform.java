package org.paradox.updater.model;


import org.objectweb.asm.tree.ClassNode;
import org.paradox.updater.handle.Updater;

import java.util.ArrayList;
import java.util.HashMap;

/**
 * Created with IntelliJ IDEA.
 * User: jeronimo078
 * Date: 06-06-13
 * Time: 18:30
 * To change this template use File | Settings | File Templates.
 */
public abstract class Transform {

    public static final HashMap<String, ClassNode> IDENTIFIED = new HashMap<>();
    public static final ArrayList<FieldContainer> FIELDS = new ArrayList<>();

    public abstract boolean validate(ClassNode classNode);

    public abstract void execute(ClassNode classNode);

    protected void addClass(ClassNode node, String name) {
        IDENTIFIED.put(name, node);
    }

    protected ClassNode getClass(String name) {
        return IDENTIFIED.get(name);
    }

    protected void addField(FieldContainer container) {
        FIELDS.add(container);
    }

    protected FieldContainer getField(String name, ClassNode owner) {
        for(FieldContainer container : FIELDS) {
            if(container.getName().equals(name) && container.getOwner().equals(owner)) {
                return container;
            }
        }
        return null;
    }



}
