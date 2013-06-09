package org.paradox.updater.transforms;

import org.objectweb.asm.tree.ClassNode;
import org.paradox.updater.handle.Updater;
import org.paradox.updater.model.Transform;

/**
 *
 */
public class Animable extends Transform {
    @Override
    public boolean validate(ClassNode classNode) {
        return getClass("Animable").equals(classNode);
    }

    @Override
    public void execute(ClassNode classNode) {
        addClass(Updater.classes.get(classNode.superName), "NodeSub");
    }
}